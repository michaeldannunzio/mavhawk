# ![](icons/favicon.ico) **Mavhawk**

Computational research at UTD by Dr. Malik's group has shown that the flexibility of micro air vehicles wings can be tailored in unique ways to produce significant benefits in aerodynamic performance (better lift vs. drag to reduce the power for flight).  The overall goal of this Capstone Design project is to design, build, and test a membrane/frame type MAV wing, with distinct voltage applied to individual wing membrane "cells" that are made from dielectric elastomer in order to actively control the stiffness distribution of the wing. The project also includes computational fluid-structure interaction (FSI) modeling to predit aerodynamic performance (modeling tools provided by Malik) and wind tunnel testing in the new UTD wind tunnel. Project objectives include designing a device to uniformly pre-strain the dielectric elastomer membrane, calibration of the membrane strain vs. voltage behavior, implementation of a wireless voltage control system (with high-voltage source) to apply distinct voltage to each wing membrane cell to achieve specific wing flexibilty configurations, fabrication of some membrane/frame wings, comparison of FSI model aerodynamic predictions for the wings with wind tunnel experiments.

The Mavhawk software was built as a control system to carry out our research. It is a fully-packaged software application, which includes a web app for client-side UI, GPIO control logic for collecting data and controlling inputs. 

## **Dependencies**

* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/get-npm)
* [Python 3](https://www.python.org/downloads/)
* [Docker](https://www.docker.com/get-started)

## **Installation**

```shell
$ git clone https://github.com/michaeldannunzio/mavhawk.git
$ cd mavhawk
$ docker build .
```

## **Usage**

The application is preconfigured for the original research purposes. The architecture of the application however, is structured around microservices. This will allow you to write your own GPIO control logic modules and customize your client-side dashboard and UI.

```python
from mavhawk import Mavhawk

class Webcam(Mavhawk.io):
	def __init__(self, *args):
		super(*args)
		self.args = args

	def record(self):
		pass

Mavhawk.register(Webcam)
```

## **Contributing**

Upon the completion of Mavhawk's intended use, this repository will accept contributions from the public. Writing custom modules to pursue your own research and help others pursue their research.

## **License**

**[MIT](LICENSE)**

Copyright 2019 Michael D'Annunzio

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
