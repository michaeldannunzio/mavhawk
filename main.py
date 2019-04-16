# Library imports
import os
from mavhawk import Mavhawk

# Source imports
from services import Webcam, VoltageController

app = Mavhawk({
	'app': os.path.abspath(os.path.join(os.path.dirname(__file__), 'app', 'build')),
	'services': [
		Webcam,
		VoltageController,
		VoltageController,
		VoltageController,
	]
})


if __name__ == '__main__':
	app()
