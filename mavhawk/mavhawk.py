import os
import time
import flask


class Mavhawk(object):

	settings = {}
	services = []
	app = None

	def __init__(self, settings):
		self.settings = settings
		
		self.app = flask.Flask(
			'MAVHAWK',
			static_folder=os.path.abspath(os.path.join(self.settings['app'], 'static')),
			template_folder=os.path.abspath(self.settings['app'])
		)

		self.app.route('/')(self.indexRoute)
		self.app.route('/exit', methods=['POST'])(self.exitRoute)

		for ServiceClass in self.settings['services']:
			serviceInstance = ServiceClass(flask=flask)
			path = os.path.join('/', serviceInstance.__name__, str(serviceInstance.id))
			print(path)
			self.app.route(path, endpoint=path, methods=['GET', 'POST'])(serviceInstance.__call__)

	def __call__(self, *args, **kwargs):
		self.app.run(threaded=True)
		del self.app

	def __del__(self):
		pass

	def indexRoute(self):
		return flask.render_template('index.html')

	def exitRoute(self):
		time.sleep(5)
		for service in self.services:
			del service

		shutdown = flask.request.environ.get('werkzeug.server.shutdown')
		shutdown()
		return "Mavhawk shutting down..."
