# Library imports
import flask
import multiprocessing

# Source imports
# from mavhawk.app import App
# from mavhawk.services import Services


# Mavhawk definition
class Mavhawk(object):
	def __init__(self, settings, *args, **kwargs):
		# self.settings = kwargs
		self.settings = settings
		self.app = flask.Flask(__name__, template_folder=self.settings['app']['path'])
		self.app.route('/')(self.indexRoute)

		for service in self.settings['services']:
			service = service['module'](
					*service['args'],
					**service['kwargs']
			)
			self.app.route('/' + service.__name__)(service.api)
			self.services.append(service)

	def __call__(self, *args, **kwargs):
		self.session = kwargs
		self.app.run(debug=True)

	def __del__(self, *args, **kwargs):
		pass

	def indexRoute(self):
		return flask.render_template('index.html')
