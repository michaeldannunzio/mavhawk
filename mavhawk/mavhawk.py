# Library imports
import multiprocessing

# Source imports
from app import App
from services import Services

# Mavhawk definition
class Mavhawk(object):
	def __init__(self, *args, **kwargs):
		self.settings = kwargs
		self.app = App(**self.settings['app'])
		self.services = Services(*self.settings['services'])

		for service in self.services:
			path = '/' + service.__class__.__name__
			func = service.api
			self.app.addRoute(path, func)

	def __call__(self, *args, **kwargs):
		self.session = kwargs
		self.app(debug=True)
		self.services()

	def __del__(self, *args, **kwargs):
		del self.services
		del self.app
