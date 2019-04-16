# Library imports
import cv2
import datetime


# Service definition
class Webcam(object):

	__name__ = 'webcam'
	_count = 0
	_record = False
	_timestamp = None
	_outputCount = 0

	settings = {
		'camera': 0,
		'fps': 30.0,
		'fourcc': 'mp4v',
		'filepath': 'data/',
		'filename': 'session',
		'extension': '.mp4',
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
		self.output = None

	def __call__(self, *args, **kwargs):
		if self.kwargs['flask'].request.method == 'POST':
			self._record = not self._record
			
			if self.output is None:
				self._timestamp = datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S")
				self.output = cv2.VideoWriter(
					self.outputFile(),
					self.fourcc,
					self.settings['fps'],
					self.resolution
				)

				self._outputCount += 1

			else:
				self.output.release()
				self.output = None
			
			return kwargs['flask'].request.jsonify({'recording': str(self._record)})

		else:
			return self.sendFrame()

	def __del__(self):
		self.capture.release()
		print(self.__name__ + 'has shutdown.')

	def getImage(self):
		success, frame = self.capture.read()
		if self.output is not None:
			self.output.write(frame)
		ret, jpeg = cv2.imencode('.jpeg', frame)
		return jpeg.tobytes()

	def genImage(self):
		while True:
			image = self.getImage()
			yield (b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + image + b'\r\n\r\n')

	def sendFrame(self):
		return self.kwargs['flask'].Response(self.genImage(), mimetype='multipart/x-mixed-replace; boundary=frame')

	def outputFile(self):
		return self.settings['filepath'] + self.settings['filename'] + str(self._timestamp) + self.settings['extension']


if __name__ == '__main__':
	webcam = Webcam()
	webcam()
