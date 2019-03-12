# Library imports
#----------------

def initialize(services):
	for index, service in enumerate(services):
		service['instance'] = service['class']( *service['args'], **service['kwargs'] )
		services[index] = service
		return services


def call(services):
	for service in services:
		service['instance'] = service['class']( *service['args'], **service['kwargs'] )
		services[index] = service
		return services
