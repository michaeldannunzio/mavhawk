# Library imports
import mavhawk
from mavhawk import configure, run

# Source imports
from services import Webcam, Potentiometer

settings = {
	'services': [
		Potentiometer,
		Webcam
	]
}

if __name__ == '__main__':
	# app = Mavhawk(settings)
	# app.run()
	context = mavhawk.configure(settings)
	mavhawk.run(context)
