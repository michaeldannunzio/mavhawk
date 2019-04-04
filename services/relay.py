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
	

# import RPi.GPIO as GPIO

# class Relay(object):

#   __name__ = 'relay'
#   _count = 0
#   state = False
    
#   settings = {}

#   def __init__(self, *args, **kwargs):
#     self.args = args
#     self.kwargs = kwargs

#     Relay._count += 1
#     self.id = Relay._count

#     GPIO.setmode(GPIO.BCM)

#     GPIO.setup(self.kwargs['PIN'], GPIO.OUT) 
#     GPIO.output(self.kwargs['PIN'], GPIO.LOW)
#     # GPIO.setup(self.settings['PIN2'], GPIO.OUT) 
#     # GPIO.output(self.settings['PIN2'], GPIO.HIGH)
#     # GPIO.setup(self.settings['PIN3'], GPIO.OUT) 
#     # GPIO.output(self.settings['PIN3'], GPIO.HIGH)

#   def __call__(self, *args, **kwargs):
# 		if kwargs['state'] == True:
# 			GPIO.output(self.kwargs['PIN'], GPIO.HIGH)
		
# 		else:
# 			GPIO.output(self.kwargs['PIN'], GPIO.LOW)
			
# 		# else:
# 			# GPIO.output(self.kwargs['PIN'], GPIO.LOW)

#       # GPIO.output(self.settings['PIN2'], GPIO.LOW)
#       # GPIO.output(self.settings['PIN3'], GPIO.LOW)
    
#   def __del__(self, *args, **kwargs):
#       GPIO.cleanup()
    
# if __name__ == '__main__':
# 	config = [
# 		{ 'PIN': 17 },
# 		{ 'PIN': 22 },
# 		{ 'PIN': 27 }
# 	]

# 	tests = [True, False, True, True, False, True, False, False]

# 	relays = []
# 	for i in config:
# 		relays.append(
# 			Relay(**i)
# 		)

# 	for relay in relays:
# 		for test in tests:
# 			relay(state=test)
		


#   # config = {
#   #   'relay' : {
#   #     'PIN1' : 17,
#   #     'PIN2' : 27,
#   #     'PIN3' : 22
#   #   }
#   # }