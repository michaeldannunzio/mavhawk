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
		self.server = Server(**self.settings['server'])
		self.services = Services(*self.settings['services'], server=self.server)

	def __call__(self, *args, **kwargs):
		self.session = kwargs
		
		# self.proc = {
		# 	'server': multiprocessing.Process(target=self.server),
		# 	'services': 
		# }

		self.proc = {}

		q = multiprocessing.Queue()
		self.proc['server'] = multiprocessing.Process(
			target=self.server,
			args=(q,),
			kwargs=self.settings['server']['run']
		)
		
		self.proc['server'].start()

		print('waiting...')

		if q.get():
			print('good bye')
			self.proc['server'].terminate()
			self.proc['server'].join()

		# del self.services
		del self.server
		del self.services
		

		# self.services()

	# def __del__(self, *args, **kwargs):
		# del self.services
		# del self.server
