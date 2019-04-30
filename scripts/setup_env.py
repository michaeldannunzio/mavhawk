from subprocess import call
import fileinput

with open('/etc/dhcp.conf', 'a') as file:
	file.write('interface wlan0')
	file.write('static ip_address=192.168.4.1/24')
	file.write('nohook wpa_supplicant')

call('sudo service dhcpcd restart'.split())
call('sudo mv /etc/dnsmasq.conf /etc/dnsmasq.conf.orig'.split())

with open('/etc/dnsmasq.conf', 'w') as file:
	file.write('interface=wlan0      # Use the require wireless interface - usually wlan0')
	file.write('dhcp-range=192.168.4.2,192.168.4.20,255.255.255.0,24h')

with open('/etc/hostapd/hostapd.conf', 'w') as file:
	file.write('interface=wlan0')
	file.write('driver=nl80211')
	file.write('ssid=NameOfNetwork')
	file.write('hw_mode=g')
	file.write('channel=7')
	file.write('wmm_enabled=0')
	file.write('macaddr_acl=0')
	file.write('auth_algs=1')
	file.write('ignore_broadcast_ssid=0')
	file.write('wpa=2')
	file.write('wpa_passphrase=AardvarkBadgerHedgehog')
	file.write('wpa_key_mgmt=WPA-PSK')
	file.write('wpa_pairwise=TKIP')
	file.write('rsn_pairwise=CCMP')

with open('/etc/default/hostapd', 'r+') as file:
	for line in fileinput.input(file, inplace = 1): 
		if '#DAEMON_CONF' in line:
			line = 'DAEMON_CONF="/etc/hostapd/hostapd.conf"'
