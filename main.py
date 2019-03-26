# Library imports
import os
from mavhawk import Mavhawk

# Source imports
from data import Database
from services import Webcam, Potentiometer

app = Mavhawk({
	'app': {
		'path': os.path.abspath(os.path.join(os.path.dirname(__file__), 'app', 'build'))
	},
	'data': {
		'module': Database,
		'args': (),
		'kwargs': {}
	},
	'services': [
		{
			'module': Webcam,
			'args': (),
			'kwargs': {
				'camera': 0,
				'fps': 30.0,
				'fourcc': 'mp4v',
				'name': 'session',
				'extension': 'mp4'
			}
		},
		{
			'module': Potentiometer,
			'args': (),
			'kwargs': {}
		}
	]
})

if __name__ == '__main__':
	app(**{})
