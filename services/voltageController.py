from potentiometer import Potentiometer
import time

class VoltageController(object):

	__name__ = 'voltage_control'
	_count = 0

	settings = {
		'vcc': 5,
		'stepUpValue': 1571
	}

	def __init__(self, *args, **kwargs):
		self.args = args
		self.kwargs = kwargs

		VoltageController._count += 1
		self.id = VoltageController._count
		self.value = 0
		self.outputVoltage = 0

		self.potentiometer = Potentiometer(**self.kwargs)

		self.start_time = time.time()
		self.current_time = time.time()

	def __call__(self, *args, **kwargs):
		self.current_time = time.time()
		
		if self.kwargs['flask'].request.method == 'POST':
			self.outputVoltage = round(float(self.kwargs['flask'].request.data.rstrip('}').split(':')[-1]), 1)
			self.stepUpVoltage = self.calculateStepUpVoltage(self.outputVoltage)
			self.value = self.calculateWiperValue(self.outputVoltage)
			self.potentiometer(value=self.value)
		return self.kwargs['flask'].jsonify({ 'value': self.outputVoltage, 'time': self.getTime() })

	def __del__(self, *args, **kwargs):
		pass

	def calculateStepUpVoltage(self, voltage):
		return voltage * self.settings['stepUpValue']

	def calculateWiperValue(self, voltage):
		value = 128 * (1 - (voltage / self.settings['vcc']))

	def getTime(self):
		return str(int(self.current_time-self.start_time))



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
