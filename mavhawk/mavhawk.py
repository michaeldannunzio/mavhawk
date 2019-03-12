# Library imports
import os
import collections

# Source imports
import app
import service
import util


# class Mavhawk(object):
# 	def __init__(self, settings={}, *args, **kwargs):
# 		self.settings = settings
# 		self.args = args
# 		self.kwargs = kwargs
		
# 	def configure(self, settings={}, *args, **kwargs):
# 		self.settings = settings
# 		self.args = args
# 		self.kwargs = kwargs

# 	def __call__(self, *args, **kwargs):
# 		pass

# 	def run(self):
# 		return self()



def configure(settings={}):
	settings = util.update(util.default, settings)
	context = {}
	
	for service in settings['services']:
		service['class']( *service['args'], **service['kwargs'] )
	
	return context

def run(context=configure()):
	pass
