# Library imports
import flask

app = flask.Flask(__name__, static_folder='app/build')

@app.route('/')
def index():
	return flask.send_from_directory('index.html')
