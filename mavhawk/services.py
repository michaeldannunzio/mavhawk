class Services(object):

	_s = []

	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

		for service in self.args:
			self._s.append(
				service['module'](
					*service['args'],
					**service['kwargs']
			))

	def __call__(self, *args, **kwargs):
		for s in self._s:
			s()

	def __del__(self, *args, **kwargs):
		for s in self._s:
			del s

	def __iter__(self):
		for s in self._s:
			yield s
