from subprocess import call
from shutil import rmtree

MODULES = [
	'flask',
]

OPENCV_REPO = 'https://github.com/michaeldannunzio/Cross-Compile-OpenCV-Raspbian.git'

for m in MODULES:
	call('pip install {m}'.format(m).split())

call('git clone {}'.format(OPENCV_REPO).split())
call('sudo apt install libgtk-3-dev libcanberra-gtk3-dev'.split())
call('sudo apt install libtiff-dev zlib1g-dev'.split())
call('sudo apt install libjpeg-dev libpng-dev'.split())
call('sudo apt install libavcodec-dev libavformat-dev libswscale-dev libv4l-dev'.split())
call('sudo apt-get install libxvidcore-dev libx264-dev'.split())
call('tar xf Cross-Compile-OpenCV-Raspbian/RASPBIAN_OPENCV/opencv-4.0.0-armhf.tar.bz2'.split())
call('sudo mv Cross-Compile-OpenCV-Raspbian/RASPBIAN_OPENCV/opencv-4.0.0 /opt'.split())
rmtree('Cross-Compile-OpenCV-Raspbian')
call('echo "export LD_LIBRARY_PATH=/opt/opencv-4.0.0/lib:$LD_LIBRARY_PATH" >> .bashrc'.split())
call('source .bashrc'.split())
call('sudo python /opt/opencv-4.0.0/python/setup.py develop'.split())
call('sudo python3 /opt/opencv-4.0.0/python/setup.py develop'.split())
