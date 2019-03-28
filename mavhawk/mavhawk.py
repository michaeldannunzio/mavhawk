# Library imports
import multiprocessing
import time

# Source imports
from server import Server
from services import Services

# Mavhawk definition
class Mavhawk(object):
	def __init__(self, *args, **kwargs):
		self.settings = kwargs
		self.server = Server(queue=multiprocessing.Queue(), **self.settings['server'])
		self.services = Services(*self.settings['services'], server=self.server)

	def __call__(self, *args, **kwargs):
		self.session = kwargs

		# self.services(process=multiprocessing.Process)
		self.server(process=multiprocessing.Process)


		
		# self.proc = {}


		# self.proc['server'] = multiprocessing.Process(
		# 	target=self.server,
		# 	kwargs=self.settings['server']['run']
		# )
		
		# self.proc['server'].start()

		time.sleep(1)
		print('\nmavhawk running...')
		if self.server.kwargs['queue'].get():
			print('preparing shutdown')
			self.proc['server'].terminate()
			self.proc['server'].join()


	def __del__(self, *args, **kwargs):
		self.server.__del__()
		self.services.__del__()
		print('mavhawk shutting down...')
