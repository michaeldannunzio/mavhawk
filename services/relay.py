import RPi.GPIO as GPIO

class Relay(object):

  __name__ = 'relay'
  state = False

  def __init__(self, *args, **kwargs):
    self.args = args
    self.kwargs = kwargs
    self.settings = self.kwargs

    GPIO.setmode(GPIO.BCM)

    GPIO.setup(self.settings['PIN'], GPIO.OUT) 
    GPIO.output(self.settings['PIN'], GPIO.LOW)

  def __call__(self, *args, **kwargs):
		self.state = kwargs['state']
		
		if self.state:
			GPIO.output(self.settings['PIN'], GPIO.HIGH)
			
		else:
			GPIO.output(self.settings['PIN'], GPIO.LOW)
    
  def shutdown(self, *args, **kwargs):
    GPIO.output(self.settings['PIN'], GPIO.LOW)
    GPIO.cleanup()
    print(self.__name__ + ' has shutdown.')

    
if __name__ == '__main__':
	pass
