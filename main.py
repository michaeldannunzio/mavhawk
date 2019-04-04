# Library imports
import os
from mavhawk import Mavhawk

# Source imports
from services import Webcam, Potentiometer

app = Mavhawk({
	'server': os.path.abspath(os.path.join(os.path.dirname(__file__), 'app', 'build')),
	'services': [
		{
			'module': Webcam,
			'settings': {
				'camera': 0
			}
		},
		{
			'module': Potentiometer,
			'settings': {
				'CLKPIN'
			}
		}
	]
})


if __name__ == '__main__':
	app({})
