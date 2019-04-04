from potentiometer import Potentiometer

class VoltageController(object):

	settings = {}

	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

		self.potentiometer = Potentiometer(**self.kwargs)










	def __call__(self, *args, **kwargs):
		if self.kwargs['flask'].request.method == 'POST':
			voltage = self.kwargs['flask'].request.data
			value = calculateWiperValue(voltage)
			self.potentiometer(value)











	def __del__(self, *args, **kwargs):
		pass

	def calculateWiperValue(voltage=0):
		# if no voltage is pass, defaults to 0
		raise NotImplementedError


if __name__ == '__main__':
	config = [
		{ 'CS': 21, 'CLK': 26, 'MOSI': 20 },
		{ 'CS': 19, 'CLK': 16, 'MOSI': 13 },
		{ 'CS': 6, 'CLK': 12, 'MOSI': 5 },
	]

	testVoltages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	voltCtrls = []
	
	for i in config:
		voltCtrls.append(VoltageController(i))

	for vc in voltCtrls:
		for voltage in testVoltages:
			vc(voltage)
