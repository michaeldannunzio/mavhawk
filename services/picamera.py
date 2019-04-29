# Library imports
#----------------


class PiCamera(object):

	__name__ = 'picamera'
	_count = 0
	_record = False

	settings = {}

	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

	def __call__(self, *args, **kwargs):
		if self.kwargs['flask'].response.method == 'POST':
			pass

		else:
			pass

	def __del__(self, *args, **kwargs):
		pass


if __name__ == '__main__':
	piCam = PiCamera()
	piCam()
