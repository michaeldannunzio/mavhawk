import RPi.GPIO as GPIO


# Service definition
class Potentiometer(object):

	__name__ = 'potentiometer'
	_count = 0
	settings = {}

	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs
		self.setting = self.kwargs['settings']

		Potentiometer._count += 1
		self.id = Potentiometer._count

		GPIO.setmode(GPIO.BCM)
		
		GPIO.setup(self.settings['CS'], GPIO.OUT)
		GPIO.setup(self.settings['CLK'], GPIO.OUT)
		GPIO.setup(self.settings['MOSI'], GPIO.OUT)

		GPIO.output(self.settings['CS'], False)
		GPIO.output(self.settings['CLK'], False)
		GPIO.output(self.settings['MOSI'], False)
		
		GPIO.output(self.settings['CS'], True)
		GPIO.output(self.settings['CLK'], False)
		GPIO.output(self.settings['CS'], False)

	def __call__(self, *args, **kwargs):
		value = kwargs['value']

		if value < 0:
			value = 0
		elif value > 127:
			value = 127

		binaryValue = "0000" "00" "{0:010b}".format(value)
		# binaryValue = binaryValue.format(kwargs['value'])
		GPIO.output(self.settings['CS'], False)

		for x in binaryValue:
			GPIO.output(self.settings['MOSI'], int(x))
			GPIO.output(self.settings['CLK'], True)
			GPIO.output(self.settings['CLK'], False)

		GPIO.output(self.settings['CS'], True)
	
	def __del__(self, *args, **kwargs):
		GPIO.cleanup()

	def apiRoute(self):
		return 'potentiometer'


if __name__ == '__main__':
	config = {
	    'pot1': {
	        'CS' : 21
	        'CLK' : 26
	        'MOSI' : 20
	    },
	    'pot2': {
	        'CS' : 19
	        'CLK' : 16
	        'MOSI' : 13
	    },
	    'pot3': {
	        'CS' : 6
	        'CLK' : 12
	        'MOSI' : 5
	    },
	}

	pot1 = Potentiometer(settings=config['pot1'])
	pot2 = Potentiometer(settings=config['pot2'])
	pot3 = Potentiometer(settings=config['pot3'])