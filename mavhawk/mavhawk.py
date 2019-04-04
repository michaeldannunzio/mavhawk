import os
import flask
# import multiprocessing

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
		self.app.route('/exit')(self.exitRoute)

		for ServiceClass in self.settings['services']:
			serviceInstance = ServiceClass(flask=flask)
			path = os.path.join('/', serviceInstance.__name__, str(serviceInstance._id))
			self.app.route(path, endpoint=path)(serviceInstance.__call__)

		# self.process = multiprocessing.Process(target=self.app.run(host='0.0.0.0', debug=False))

	def __call__(self, *args, **kwargs):
		# self.process.start()
		self.app.run(host='0.0.0.0', debug=False)

	def __del__(self, *args, **kwargs):
		pass

	def indexRoute(self):
		return flask.render_template('index.html')

	def exitRoute(self):
		shutdown = flask.request.environ.get('werkzeug.server.shutdown')
		shutdown()
		return "Shutting down Mavhawk..."
		# self.process.terminate()
		# self.process.join()
