# Library imports
import cv2


# Service definition
class Webcam(object):

	settings = {
		'camera': 0,
		'fps': 30.0,
		'fourcc': 'mp4v',
		# 'height': int(self.capture.get(cv2.CAP_PROP_FRAME_HEIGHT) + 0.5),
		# 'width': int(self.capture.get(cv2.CAP_PROP_FRAME_WIDTH) + 0.5)
	}

	# capture = None
	# height = None
	# width = None
	# resolution = None
	# fourcc = None
	# output = None

	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs
		# self.settings = self.kwargs['settings']

		self.capture = cv2.VideoCapture(self.settings['camera'])
		self.capture.set(cv2.CAP_PROP_FPS, self.settings['fps'])

		self.width = int(self.capture.get(cv2.CAP_PROP_FRAME_WIDTH) + 0.5)
		self.height = int(self.capture.get(cv2.CAP_PROP_FRAME_HEIGHT) + 0.5)
		self.resolution = (self.width, self.height)

		self.fourcc = cv2.VideoWriter_fourcc(*self.settings['fourcc'])
		self.output = cv2.VideoWriter(
			# self.settings['Database'].filename(name=self.settings['name'], extension=self.settings['extension']),
			'session.mp4',
			self.fourcc,
			self.settings['fps'],
			self.resolution
		)

	def __call__(self, *args, **kwargs):
		while(self.capture.isOpened()):
			success, self.frame = self.capture.read()
			if success == True:
				self.output.write(self.frame)

	def __del__(self):
		self.output.release()
		self.capture.release()

	def start(self):
		self()

	def apiRoute(self):
		ret, jpeg = cv2.imencode('jpeg', self.frame)
		frame = jpeg.tobytes()
		content = (b'--frame\r\n'b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
		return self.response(content, mimetype='multipart/x-mixed-replace; boundary=frame')

def run(**options):
	for key, value in options.iteritems():
		print(key, value)



if __name__ == '__main__':
	webcam = Webcam()
	webcam()
