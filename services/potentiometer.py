import RPi.GPIO as GPIO


# Service definition
class Potentiometer(object):

	__name__ = 'potentiometer'
	_count = 0
	

	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

		Potentiometer._count += 1
		self.id = Potentiometer._count

		GPIO.setmode(GPIO.BCM)
		
		GPIO.setup(self.kwargs['CS'], GPIO.OUT)
		GPIO.setup(self.kwargs['CLK'], GPIO.OUT)
		GPIO.setup(self.kwargs['MOSI'], GPIO.OUT)

		GPIO.output(self.kwargs['CS'], False)
		GPIO.output(self.kwargs['CLK'], False)
		GPIO.output(self.kwargs['MOSI'], False)
		
		GPIO.output(self.kwargs['CS'], True)
		GPIO.output(self.kwargs['CLK'], False)
		GPIO.output(self.kwargs['CS'], False)

	def __call__(self, *args, **kwargs):
		value = kwargs['value']

		if value < 0:
			value = 0

		elif value > 127:
			value = 127

		binaryValue = "0000" "00" "{0:010b}".format(value)

		GPIO.output(self.kwargs['CS'], False)

		for x in binaryValue:
			GPIO.output(self.kwargs['MOSI'], int(x))
			GPIO.output(self.kwargs['CLK'], True)
			GPIO.output(self.kwargs['CLK'], False)

		GPIO.output(self.kwargs['CS'], True)
	
	def shutdown(self, *args, **kwargs):
		self(value=0)
		GPIO.cleanup()
		print(self.__name__ + ' has shutdown.')

	def apiRoute(self):
		return 'potentiometer'


if __name__ == '__main__':
	pass
