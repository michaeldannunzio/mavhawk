# ![](icons/favicon.ico) **Mavhawk**

Computational research at UTD by Dr. Malik's group has shown that the flexibility of micro air vehicles wings can be tailored in unique ways to produce significant benefits in aerodynamic performance (better lift vs. drag to reduce the power for flight).  The overall goal of this Capstone Design project is to design, build, and test a membrane/frame type MAV wing, with distinct voltage applied to individual wing membrane "cells" that are made from dielectric elastomer in order to actively control the stiffness distribution of the wing. The project also includes computational fluid-structure interaction (FSI) modeling to predit aerodynamic performance (modeling tools provided by Malik) and wind tunnel testing in the new UTD wind tunnel. Project objectives include designing a device to uniformly pre-strain the dielectric elastomer membrane, calibration of the membrane strain vs. voltage behavior, implementation of a wireless voltage control system (with high-voltage source) to apply distinct voltage to each wing membrane cell to achieve specific wing flexibilty configurations, fabrication of some membrane/frame wings, comparison of FSI model aerodynamic predictions for the wings with wind tunnel experiments.

The Mavhawk software was built as a control system to carry out our research. It is a fully-packaged software application, which includes a web app for client-side UI, GPIO control logic for collecting data and controlling inputs.

## **Dependencies**

* [Git]()
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/get-npm)
* [Python 2.7](https://www.python.org/downloads/)
* [pip]()
* [OpenCV 4.0]()

## **Installation**

This will download the Mavhawk application.

```shell
git clone https://github.com/michaeldannunzio/mavhawk.git
cd mavhawk
```

The following will download and set up the applications dependencies and environment.

`setup_deps.py` will install *OpenCV 4.0* and configure it for Python. It will also install the application's other dependencies such as npm and flask.

When setting up your environment, the `setup_env.py` script will modify your operating systems networking abilities. It will turn your machine into a standalone network, which can be connected to via WiFi. The network's name is **Mavhawk** and the password is **mavhawk**. This is done in order to create an isolated environment to avoid network security issues and to keep intruders from affecting your research.

```shell
python scripts/setup_deps.py	# NOTE: This will restart your Raspberry Pi
python scripts/setup_env.py	# Navigate back to mavhawk directory first
```

## **Usage**

This application assumes you possess "" potentiometer and "" relay.

The number of potentiometers and relays you have can be configured in the source code. Assuming you have a single relay and three potentiometers, you can run the application as follows.

```shell
python main.py
```

To shutdown the Mavhawk application, there is a run icon button located at the top righthand side of the dashboard. When it is clicked, the application will shutdown and your Raspberry Pi will shutdown with it.

## **License**

**[MIT](LICENSE)**

Copyright 2019 Michael D'Annunzio

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
