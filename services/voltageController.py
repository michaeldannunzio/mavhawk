from potentiometer import Potentiometer

class VoltageController(object):

	settings = {
		'vcc': 5,
		'stepUpValue': 1571
	}

	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

		self.potentiometer = Potentiometer(**self.kwargs)

	def __call__(self, *args, **kwargs):
		if self.kwargs['flask'].request.method == 'POST':
			outputVoltage = self.kwargs['flask'].request.data
			stepUpVoltage = self.calculateStepUpVoltage(outputVoltage)
			value = self.calculateWiperValue(outputVoltage)
			self.potentiometer(value)

	def __del__(self, *args, **kwargs):
		pass

	def calculateStepUpVoltage(self, voltage):
		return voltage * self.settings['stepUpValue']

	def calculateWiperValue(self, voltage):
		value = 128 * (1 - (voltage / self.settings['vcc']))


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
