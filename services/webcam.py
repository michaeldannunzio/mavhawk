# Library imports
import cv2


# Service definition
class Webcam(object):

	__name__ = 'webcam'
	_id = 1

	settings = {
		'camera': 0,
		'fps': 30.0,
		'fourcc': 'mp4v',
	}

	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

		self.capture = cv2.VideoCapture(self.settings['camera'])
		self.capture.set(cv2.CAP_PROP_FPS, self.settings['fps'])

		self.width = int(self.capture.get(cv2.CAP_PROP_FRAME_WIDTH) + 0.5)
		self.height = int(self.capture.get(cv2.CAP_PROP_FRAME_HEIGHT) + 0.5)
		self.resolution = (self.width, self.height)

		self.fourcc = cv2.VideoWriter_fourcc(*self.settings['fourcc'])
		self.output = cv2.VideoWriter(
			'session.mp4',
			self.fourcc,
			self.settings['fps'],
			self.resolution
		)

	def __call__(self, *args, **kwargs):
		pass

	def __del__(self):
		self.output.release()
		self.capture.release()


if __name__ == '__main__':
	webcam = Webcam()
	webcam()
