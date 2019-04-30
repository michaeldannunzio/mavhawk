from subprocess import call
from shutil import rmtree

MODULES = [
	'flask',
]

OPENCV_REPO = 'https://github.com/michaeldannunzio/Cross-Compile-OpenCV-Raspbian.git'

# install python dependencies
for m in MODULES:
	call('pip install {m}'.format(m).split())

# install node and npm
call('wget https://nodejs.org/dist/v8.9.0/node-v8.9.0-linux-armv6l.tar.gz'.split())
call('tar -xzf node-v8.9.0-linux-armv6l.tar.gz'.split())
call('cd node-v6.11.1-linux-armv6l/'.split())
call('sudo cp -R * /usr/local/'.split())

# install opencv 
call('git clone {}'.format(OPENCV_REPO).split())
call('sudo apt-get update'.split())
call('sudo apt-get upgrade'.split())
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

# setup rpi for standalone network
call('sudo apt-get install dnsmasq hostapd'.split())
call('sudo systemctl stop dnsmasq'.split())
call('sudo systemctl stop hostapd'.split())
call('sudo reboot'.split())
