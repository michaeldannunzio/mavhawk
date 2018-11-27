import numpy as np
import cv2
import matplotlib.pyplot as plt

"""
create sample image
	-	make stochastic random pattern on an arbitrary surface
	- take photo at 720p resolution

convert image to grayscale

plot histogram of values ( for black and white )
	- find separation point for black and white values

plot secondary histogram of black values
	- values for points centers
	- values for points edges

generate random dots for testing
	- center values will be a random within 2 stddevs of mean
	- edge values will be a random number between 2 stddevs and center value

simulate strain by taking center of image and "stretching" it
	- all dots should move towards edge
	- dots will move exponentially further relative to center of image

begin r&d for DIC

"""
