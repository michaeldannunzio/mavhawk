# Library imports
import flask

class App(object):

	path = ''
	services = []


	def __init__(self, *args, **kwargs):
		self.app = flask.Flask(__name__, template_folder=kwargs['path'])
		self.app.route('/')(self.index)

		for service in kwargs['service']:
			self.app.route(service['route'], service['method'])

	def index(self):
		return flask.render_template('index.html')

	def __call__(self):
		self.app.run(debug=True)
