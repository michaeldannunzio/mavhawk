import flask

class Server(object):
	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

		self.app = flask.Flask(
			__name__,
			static_folder=self.kwargs['static'],
			template_folder=self.kwargs['template']
		)

		self.app.route('/')(self.indexRoute)
		self.app.route('/exit')(self.exitRoute)

	def __call__(self, q, *args, **kwargs):
		self.q = q
		self.app.run(**kwargs)

	def __del__(self, *args, **kwargs):
		del self.app

	def indexRoute(self):
		return flask.render_template('index.html')
	
	def exitRoute(self):
		self.q.put(True)
		return 'laterrrrr'
	
	def addRoute(self, path, func):
		self.app.route(path, endpoint=path)(func)
