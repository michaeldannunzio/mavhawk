__package__ = 'mavhawk'

import flask
import multiprocessing
import time

class Mavhawk(object):

	settings = {}
	session = {}
	services = []
	server = None

	def __init__(self, settings):
		self.settings = settings

		self.server = flask.Flask(
			__name__,
			static_folder=self.settings['server']['static'],
			template_folder=self.settings['server']['template']
			)

		self.server.route('/')(indexRoute)
		self.server.route('/')(exitRoute)


	def __call__(self, session={}):
		pass

	def run(self, session={}):
		return self(session)


def indexRoute():
	return flask.render_template('index.html')

def exitRoute():
	return 'Mavhawk shutting down.'

