class Services(object):

	_s = []

	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

		for service in self.args:
			s = service['module'](*service['args'], **service['kwargs'])
			kwargs['server'].addRoute('/' + s.__class__.__name__, s.apiRoute)
			self._s.append(s)

	def __call__(self, *args, **kwargs):
		for s in self._s:
			s()

	def __del__(self, *args, **kwargs):
		for s in self._s:
			del s

	# def __iter__(self):
	# 	for s in self._s:
	# 		yield s
