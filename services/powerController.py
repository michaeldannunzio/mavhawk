from relay import Relay

class PowerController(object):

	__name__ = 'power_control'
	_count = 0
	state = False
	
	settings = {}

	def __init__(self, *args, **kwargs):
		self.args
		self.kwargs

		PowerController._count += 1
		self.id = PowerController._count

		self.relays = []
		for relay in self.kwargs['relays']:
			self.relays.append(Relay(PIN=relay['PIN']))

	def __call__(self, *args, **kwargs):
		if self.kwargs['flask'].request.method == 'POST':
			self.state = not self.state

		res = []
		for relay in self.relays:
			res.append(relay(state=self.state))
		return self.kwargs['flask'].jsonify(res)
			
	def __del__(self, *args, **kwargs):
		pass


if __name__ == '__main__':
	config = {
		'relays': [
			{ 'PIN': 17 },
			{ 'PIN': 22 },
			{ 'PIN': 27 }
		]
	}

	power = PowerController(**config)
	