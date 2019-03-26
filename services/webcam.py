# Library imports
import cv2


# Service definition
class Webcam(object):

	__name__ = 'webcam'

	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

		self.capture = cv2.VideoCapture(self.kwargs['camera'])
		self.capture.set(cv2.CAP_PROP_FPS, self.kwargs['fps'])

		self.width = int(self.capture.get(cv2.CAP_PROP_FRAME_WIDTH) + 0.5)
		self.height = int(self.capture.get(cv2.CAP_PROP_FRAME_HEIGHT) + 0.5)
		self.resolution = (self.width, self.height)

		self.fourcc = cv2.VideoWriter_fourcc(*self.kwargs['fourcc'])
		# self.output = cv2.VideoWriter(
		# 	self.kwargs['Database'].filename(name=self.kwargs['name'], extension=self.kwargs['extension']),
		# 	self.fourcc,
		# 	self.fps,
		# 	self.resolution
		# )

	def __call__(self, *args, **kwargs):
		while(self.capture.isOpened()):
			success, frame = self.capture.read()
			if success == True:
				self.output.write(frame)
				ret, jpeg = cv2.imencode('jpeg', frame)
				yield jpeg.tobytes()

	def __del__(self, *args, **kwargs):
		self.output.release()
		self.capture.release()

	def api(self):
		return "webcam"
