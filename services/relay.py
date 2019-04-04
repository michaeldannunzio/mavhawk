import RPi.GPIO as GPIO

class Relay(object):
    _name_ = 'relay'
    def __init__(self, *args, **kwargs):
        self.args = args
        self.kwargs = kwargs
        self.setting = self.kwargs['settings']

        GPIO.setmode(GPIO.BCM)

        GPIO.setup('PIN1', GPIO.OUT) 
        GPIO.output('PIN1', GPIO.HIGH)
        GPIO.setup('PIN2', GPIO.OUT) 
        GPIO.output('PIN2', GPIO.HIGH)
        GPIO.setup('PIN3', GPIO.OUT) 
        GPIO.output('PIN3', GPIO.HIGH)

    def __call__(self,*args,**kwargs):
        GPIO.output('PIN1', GPIO.LOW)
        GPIO.output('PIN1', GPIO.LOW)
        GPIO.output('PIN1', GPIO.LOW)
    
    def __del__(self,*args,**kwargs):
        GPIO.cleanup()
    
    if __name__ == '__main__':
        config = {
            'relay1' : {
                'PIN1' : 17
                'PIN2' : 27
                'PIN3' : 22
            },
        }
    

    relay1 = Relay(settings = config['relay1'])