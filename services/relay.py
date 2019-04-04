import RPi.GPIO as GPIO

class Relay(object):

    __name__ = 'relay'

    def __init__(self, *args, **kwargs):
        self.args = args
        self.kwargs = kwargs
        self.setting = self.kwargs['settings']

        GPIO.setmode(GPIO.BCM)

        GPIO.setup(self.settings['PIN1'], GPIO.OUT) 
        GPIO.output(self.settings['PIN1'], GPIO.HIGH)
        GPIO.setup(self.settings['PIN2'], GPIO.OUT) 
        GPIO.output(self.settings['PIN2'], GPIO.HIGH)
        GPIO.setup(self.settings['PIN3'], GPIO.OUT) 
        GPIO.output(self.settings['PIN3'], GPIO.HIGH)

    def __call__(self, *args, **kwargs):
        GPIO.output(self.settings['PIN1'], GPIO.LOW)
        GPIO.output(self.settings['PIN2'], GPIO.LOW)
        GPIO.output(self.settings['PIN3'], GPIO.LOW)
    
    def __del__(self, *args, **kwargs):
        GPIO.cleanup()
    
if __name__ == '__main__':
    config = {
        'relay1' : {
            'PIN1' : 17,
            'PIN2' : 27,
            'PIN3' : 22
        }
    }
    relay1 = Relay(settings = config['relay1'])
	