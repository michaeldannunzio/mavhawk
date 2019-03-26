# Library imports
import flask
import multiprocessing

# Source imports


# Mavhawk definition
class Mavhawk(object):

	settings = {}
	services = []
	sessions = {}

	def __init__(self, settings, *args, **kwargs):
		# self.settings = kwargs
		self.settings = settings
		self.app = flask.Flask(__name__, static_folder=self.settings['app']['static'], template_folder=self.settings['app']['template'])
		self.app.route('/')(self.indexRoute)

		for service in self.settings['services']:
			service = service['module'](
					*service['args'],
					**service['kwargs']
			)
			path = '/' + service.__name__
			self.app.route(path, endpoint=path)(service.api)
			self.services.append(service)

	def __call__(self, *args, **kwargs):
		self.session = kwargs
		self.app.run(debug=True)

	def __del__(self, *args, **kwargs):
		pass

	def indexRoute(self):
		return flask.render_template('index.html')
