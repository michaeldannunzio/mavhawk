# Library imports
import cv2


# Service definition
class Webcam(object):
	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

		# self.capture = cv2.VideoCapture(self.kwargs['camera'])
		self.capture = cv2.VideoCapture(0)

		self.fps = 30.0
		self.capture.set(cv2.CAP_PROP_FPS, self.fps)

		self.width = int(self.capture.get(cv2.CAP_PROP_FRAME_WIDTH) + 0.5)
		self.height = int(self.capture.get(cv2.CAP_PROP_FRAME_HEIGHT) + 0.5)
		self.resolution = (self.width, self.height)

		self.fourcc = cv2.VideoWriter_fourcc(*'mp4v')
		self.output = cv2.VideoWriter(
			# self.kwargs['db'].filename(name='session', extension='mp4'),
			'output.mp4',
			self.fourcc,
			self.fps,
			self.resolution
		)

	def __call__(self, *args, **kwargs):
		while(self.capture.isOpened()):
			success, frame = self.capture.read()
			if success == True:
				self.output.write(frame)
				ret, jpeg = cv2.imencode('jpeg', frame)
				yield jpeg.tobytes()

	def get_frame():
		success, frame = self.capture.read()
		ret, jpeg = cv2.imencode('.jpeg', frame)
		return jpeg.tobytes()

	def __del__(self, *args, **kwargs):
		self.output.release()
		self.capture.release()
