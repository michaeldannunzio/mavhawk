# Library imports
import multiprocessing
import time

# Source imports
from server import Server
from services import Services


# Mavhawk definition
class Mavhawk(object):

	settings = {}
	session = {}
	server = None
	services = None

	def __init__(self, *args, **kwargs):
		self.settings = kwargs
		self.server = Server(queue=multiprocessing.Queue(), **self.settings['server'])
		self.services = Services(server=self.server, *self.settings['services'])

	def __call__(self, session={}):
		self.session = session		
		
		self.server(process=multiprocessing.Process)
		# self.services(process=multiprocessing.Process)

		self.server.process.start()
		# self.services.process.start()

		time.sleep(1)

		if self.server.kwargs['queue'].get():
			self.server.process.terminate()
			self.server.process.join()

	def __del__(self, *args, **kwargs):
		pass
		# self.server.__del__()
		# self.services.__del__()

	def run(self, session={}):
		self(session)
