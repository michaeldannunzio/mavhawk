class Services(object):

	_s = []

	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

		kwargs['server'].addRoute('/services' + self.__class__.__name__, self.serviceRoute)
		for service in self.args:
			s = service['module'](*service['args'], **service['kwargs'])
			kwargs['server'].addRoute('/services/' + s.__class__.__name__, s.apiRoute)
			self._s.append(s)

	def __call__(self, *args, **kwargs):
		for s in self._s:
			yield s

		
		# for s in self._s:
			# s()

	def __del__(self, *args, **kwargs):
		pass

	def __len__(self):
		return len(self._s)

	def serviceRoute(self):
		return 'service'
