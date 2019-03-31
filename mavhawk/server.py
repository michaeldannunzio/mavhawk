# Library imports
import flask


# Server definition
class Server(object):

	settings = {
		'debug': False,
		'threaded': True
	}

	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

		self.app = flask.Flask(
			__name__.split('.')[0].upper(),
			static_folder=self.kwargs['static'],
			template_folder=self.kwargs['template']
		)

		self.app.route('/')(self.indexRoute)
		self.app.route('/exit')(self.exitRoute)

	def __call__(self, *args, **kwargs):
		self.process = kwargs['process'](target=self.app.run, kwargs=self.settings)

	def __del__(self, *args, **kwargs):
		pass

	def indexRoute(self, *args, **kwargs):
		return flask.render_template('index.html')
	
	def exitRoute(self, *args, **kwargs):
		self.kwargs['queue'].put(True)
		return 'Mavhawk shutting down.'
	
	def addRoute(self, path, func):
		self.app.route(path, endpoint=path)(func)
