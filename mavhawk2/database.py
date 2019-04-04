import os
import json

class Database(object):
	def __init__(self, *args, **kwargs):
		self.workingDir = os.path.abspath(os.getcwd())

	def __call__(self, *args, **kwargs):
		pass

	def __del__(self, *args, **kwargs):
		pass
