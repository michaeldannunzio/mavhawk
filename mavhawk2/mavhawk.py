# Library imports
import time
import multiprocessing

# Source imports
from server import Server
from services import Services


# Mavhawk definition
class Mavhawk(object):

	settings = {}
	session = {}
	server = None
	services = {}

	def __init__(self, settings):
		self.settings = settings
		if not self.settings.has_key('server'):
			self.settings['server'] = {}

		self.services = Services(*self.settings['services'])

		# self.server = Server(
		# 	services=self.services,
		# 	settings=self.settings['server']
		# )

	def __call__(self, session={}):
		self.session = session
		if not self.session.has_key('services'):
			self.session['services'] = {}
		if not self.session.has_key('server'):
			self.session['server'] = {}

		self.services(multiprocessing.Process, self.session['services']).start()
		# self.server(multiprocessing.Process, self.session['server']).start()

		try:
			time.sleep(3)
		
		finally:
			# self.server.shutdown()
			self.services.shutdown()










			

	# 	self.services(self.session['services'])
	# 	self.server(self.session['server'])

	# 	try:
	# 		while self.server.running:
	# 			pass

	# 	finally:
	# 		self.server.shutdown()
	# 		self.services.shutdown()













































































	# # settings = {}
	# # session = {}
	# # server = None
	# # services = None

	# def __init__(self, *args, **kwargs):
	# 	self.settings = kwargs

	# 	self.server = Server(
	# 		process=multiprocessing.Process,
	# 		queue=multiprocessing.Queue(),
	# 		**self.settings['server']
	# 	)
		
	# 	self.services = Services(
	# 		server=self.server,
	# 		*self.settings['services']
	# 	)

	# def __call__(self, *args, **kwargs):
	# 	self.session = session
		
	# 	try:

	# 		self.server(process=multiprocessing.Process)
	# 		self.services(process=multiprocessing.Process)

	# 		self.server.process.start()
	# 		for process in self.services._p:
	# 			process.start()
	# 	# self.services.process.start()

	# 		time.sleep(1)

	# 		if self.server.kwargs['queue'].get():
	# 			self.server.process.terminate()
	# 			self.server.process.join()

	# 			for process in self.services._p:
	# 				process.terminate()
	# 				process.join()
			
	# 	except KeyboardInterrupt:
	# 		self.server.process.terminate()
	# 		self.server.process.join()

	# 		for process in self.services._p:
	# 			process.terminate()
	# 			process.join()

	# def __del__(self, *args, **kwargs):
	# 	pass
