# Library imports
import os
from mavhawk import Mavhawk

# Source imports
from services import Webcam

app = Mavhawk({
	'app': os.path.abspath(os.path.join(os.path.dirname(__file__), 'app', 'build')),
	'services': [
		Webcam
	]
})


if __name__ == '__main__':
	app()
