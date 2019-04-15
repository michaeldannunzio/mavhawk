# Library imports
import cv2


# Service definition
class Webcam(object):

	__name__ = 'webcam'
	_count = 0
	_record = False

	settings = {
		'camera': 0,
		'fps': 30.0,
		'fourcc': 'mp4v',
	}

	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

		Webcam._count += 1
		self.id = Webcam._count

		self.capture = cv2.VideoCapture(self.settings['camera'])
		self.capture.set(cv2.CAP_PROP_FPS, self.settings['fps'])

		self.width = int(self.capture.get(cv2.CAP_PROP_FRAME_WIDTH) + 0.5)
		self.height = int(self.capture.get(cv2.CAP_PROP_FRAME_HEIGHT) + 0.5)
		self.resolution = (self.width, self.height)

		self.fourcc = cv2.VideoWriter_fourcc(*self.settings['fourcc'])
		self.output = cv2.VideoWriter(
			'data/session.mp4',
			self.fourcc,
			self.settings['fps'],
			self.resolution
		)

	def __call__(self, *args, **kwargs):

		# pprint(dir(self.kwargs['flask'].request))
		# print(self.kwargs['flask'].request.data)

		if self.kwargs['flask'].request.method == 'POST':
			self._record = not self._record
			return str(self._record)

		else:
			return self.sendFrame()

	def __del__(self):
		print('camquit')
		self.output.release()
		self.capture.release()

	def getImage(self):
		success, frame = self.capture.read()
		if self._record == True:
			self.output.write(frame)
			print("RECORDING")
		else:
			print('waiting...')
		ret, jpeg = cv2.imencode('.jpeg', frame)
		return jpeg.tobytes()

	def genImage(self):
		while True:
			image = self.getImage()
			yield (b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + image + b'\r\n\r\n')

	def sendFrame(self):
		# content = self.getFrame()
		return self.kwargs['flask'].Response(self.genImage(), mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
	webcam = Webcam()
	webcam()
