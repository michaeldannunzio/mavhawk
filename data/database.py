# Library imports
import os
import json


# Database definition
class Database(object):
	
	file = os.path.abspath(os.path.join(os.path.dirname(__file__), 'db.json'))
	directory = os.path.abspath(os.path.join(os.path.dirname(__file__), 'db'))

	data = None
	
	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

	def __call__(self, *args, **kwargs):
		pass

	def __del__(self, *args, **kwargs):
		with open('db.json') as file:
			db = json.load(file)
			db.append(self.data)
			json.dump(db, file)
