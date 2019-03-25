class Services(object):
	def __init__(self, *args, **kwargs):
		self.services = []

		for service in args:
			self.services.append(
				service['module'](
					*service['args'],
					**service['kwargs']
			))

	def __call__(self, *args, **kwargs):
		pass

	def __del__(self, *args, **kwargs):
		pass
