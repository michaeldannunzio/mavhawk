# Library imports
import multiprocessing
import time

# Source imports
from app import App
from services import Services

# Mavhawk definition
class Mavhawk(object):
	def __init__(self, *args, **kwargs):
		self.settings = kwargs
		self.app = App(**self.settings['app'])
		# self.services = Services(*self.settings['services'])

		# for service in self.services:
		# 	self.app.addRoute(
		# 		'/' + service.__class__.__name__,
		# 		service.apiRoute
		# 	)

	def __call__(self, *args, **kwargs):
		self.session = kwargs
		
		# self.proc = {
		# 	'app': multiprocessing.Process(target=self.app),
		# 	'services': 
		# }

		self.proc = {}

		q = multiprocessing.Queue()
		self.proc['app'] = multiprocessing.Process(target=self.app, args=(q,))
		# , kwargs={'debug': True})
		self.proc['app'].start()

		# run = True
		# while run:
		# 	if q.get():
		# 		run = False
				# self.proc['app'].terminate()
				# self.proc['app'].join()

		print('waiting...')

		if q.get():
			print('good bye')
			self.proc['app'].terminate()
			self.proc['app'].join()

		# del self.services
		del self.app
		del self.services
		

		# self.services()

	# def __del__(self, *args, **kwargs):
		# del self.services
		# del self.app
