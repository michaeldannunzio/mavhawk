class Services(object):

	session = {}
	services = []
	processes = []

	def __init__(self, *services):
		for service in services:
			service = service['module'](**service['settings'])

			# self.services.append(Service())

	def __call__(self, process, session):
		self.session = session

		for service in self.services:
			self.processes.append(process(target=service.start))

		return self

	def start(self):
		for process in self.processes:
			process.start()

	def shutdown(self):
		for process in self.processes:
			process.terminate()
			process.join()





















































	# _s = []
	# _p = []

	# def __init__(self, *args, **kwargs):
	# 	self.args = args
	# 	self.kwargs = kwargs

	# 	kwargs['server'].addRoute('/services' + self.__class__.__name__, self.serviceRoute)
	# 	for service in self.args:
	# 		s = service['module'](*service['args'], **service['kwargs'])
	# 		s.response = kwargs['server'].addRoute('/' + s.__name__, s.apiRoute)
	# 		self._s.append(s)

	# 		# p = self.kwargs['process'](target=s.__call__)
	# 		# self._p.append(p)

	# def __call__(self, *args, **kwargs):
	# 	for s in self._s:
	# 		p = kwargs['process'](target=s.__call__)
	# 		# p.start()
	# 		self._p.append(p)

	# def __del__(self, *args, **kwargs):
	# 	pass

	# def __len__(self):
	# 	return len(self._s)

	# def serviceRoute(self):
	# 	return 'service'
