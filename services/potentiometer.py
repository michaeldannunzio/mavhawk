# Library imports
import RPi.GPIO as GPIO


# Service definition
class Potentiometer(object):

	__name__ = 'potentiometer'

	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

		GPIO.setmode(GPIO.BCM)
		
		GPIO.setup(self.kwargs['SPI_CS_PIN'], GPIO.OUT)
		GPIO.setup(self.kwargs['SPI_CLK_PIN'], GPIO.OUT)
		GPIO.setup(self.kwargs['SPI_SDISDO_PIN'], GPIO.OUT)

		GPIO.output(self.kwargs['SPI_CLK_PIN'], False)
		GPIO.output(self.kwargs['SPI_SDISDO_PIN'], False)
		GPIO.output(self.kwargs['SPI_CS_PIN'], False)
		
		GPIO.output(self.kwargs['SPI_CS_PIN'], True)
		GPIO.output(self.kwargs['SPI_CLK_PIN'], False)
		GPIO.output(self.kwargs['SPI_CS_PIN'], False)

	def __call__(self, *args, **kwargs):
		value = kwargs['value']

		if value < 0:
			value = 0
		elif value > 127:
			value = 127

		binaryValue = "0000" "00" "{0:010b}".format(value)
		# binaryValue = binaryValue.format(kwargs['value'])
		GPIO.output(self.kwargs['SPI_CS_PIN'], False)

		for x in binaryValue:
			GPIO.output(self.kwargs['SPI_SDISDO_PIN'], int(x))
			GPIO.output(self.kwargs['SPI_CLK_PIN'], True)
			GPIO.output(self.kwargs['SPI_CLK_PIN'], False)

		GPIO.output(self.kwargs['SPI_CS_PIN'], True)
	
	def __del__(self, *args, **kwargs):
		GPIO.cleanup()

	def apiRoute(self):
		return 'potentiometer'
