from relay import Relay
import datetime

class PowerController(object):

	__name__ = 'power_control'
	_count = 0
	state = False
	
	settings = {}

	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

		PowerController._count += 1
		self.id = PowerController._count

		self.relays = []
		for relay in self.kwargs['relays']:
			self.relays.append(Relay(PIN=relay['PIN']))

	def __call__(self, *args, **kwargs):
		if self.kwargs['flask'].request.method == 'POST':
			self.state = not self.state
			
			for i in range(3):
				voltageController = self.kwargs['mavhawk'].services['voltage_control_{}'.format(str(i+1))]
				voltageController.start_time = datetime.datetime.now()

		res = []
		for relay in self.relays:
			res.append(relay(state=self.state))
		return self.kwargs['flask'].jsonify(res)
			
	def __del__(self, *args, **kwargs):
		print(self.__name__ + 'has shutdown.')


if __name__ == '__main__':
	config = {
		'relays': [
			{ 'PIN': 17 },
			{ 'PIN': 22 },
			{ 'PIN': 27 }
		]
	}

	power = PowerController(**config)
	