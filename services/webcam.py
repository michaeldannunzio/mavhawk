# Library imports
import cv2

# Source imports
from mavhawk.services import service


# Service definition
class Webcam(object):

	camera = 0

	def __init__(self, *args, **kwargs):
		self.datapath = kwargs['datapath']
		self.capture = cv2.VideoCapture(self.camera)
		self.capture.set(cv2.CAP_PROP_FPS, 30)

	def __call__(self, *args, **kwargs):
		imgNum = 0

		while(True):
			ret, frame = self.capture.read()
			filename = self.datapath + 'cap' + imgNum + '.jpg'
			cv2.imwrite(filename, frame)

	def __del__(self, *args, **kwargs):
		self.capture.release()

# Register service
service.register(Webcam)
