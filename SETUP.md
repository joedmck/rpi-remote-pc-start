# Setup Instructions
If you want to do this for yourself, here are some setup instructions...

## Electronic Setup

To see a simplified wiring diagram for my own personal setup, [click here](https://software.jmckinnon.co.uk/files/images/wiring-diagram.png)

This was made with the software called Fritzing. Only difference is I use a relay instead of a transistor so that my PC is galvanically isolated from my Raspberry Pi. Although Fritzing (the software I used to make the wiring diagram), doesn't have a relay module inbuilt so I substituted it for a transistor, however this should still work as it is. Additionally, the resistor values are not accurate, when I just left them as default. If you are trying to make this project and you can't work out what value resistors you need, you can send me an email, you can find my email address on my profile.

## Software Setup
### Prerequisites
#### Wiring Pi
First check that wiringPi is not already installed. In a terminal, run:
```
gpio -v
```
If you get something, then you have it already installed. The next step is to work out if it’s installed via a standard package or from source. If you installed it from source, then you know what you’re doing – carry on – but if it’s installed as a package, you will need to remove the package first. To do this:
```
sudo apt-get purge wiringpi
hash -r
```
Then carry on.

If you do not have GIT installed, then under any of the Debian releases (e.g. Raspbian), you can install it with:
```
sudo apt-get install git-core
```
To obtain WiringPi using GIT:
```
cd
sudo git clone git://git.drogon.net/wiringPi
```
If you have already used the clone operation for the first time, then
```
cd ~/wiringPi
sudo git pull origin
```
Will fetch an updated version then you can re-run the build script below.

To build/install there is a new simplified script:
```
cd ~/wiringPi
sudo ./build
```
The new build script will compile and install it all for you – it does use the sudo command at one point, so you may wish to inspect the script before running it.

If you are having trouble with this installation, you can get more information on the [Wiring Pi Website](http://wiringpi.com/).

#### Apache2
On a Raspbian Stretch install, install Apache2:
```
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install apache2
```
#### PHP 7.0
Then install PHP 7 and lots of modules:
```
sudo apt-get install php7.0 php7.0-gd sqlite php7.0-sqlite php7.0-curl php7.0-json php7.0-cli php7.0-opcache php7.0-readline
```

Enable PHP functionality within the Apache2 web server:
```
sudo apt-get install libapache2-mod-php7.0
```

Restart the web server:
```
sudo service apache2 restart
```

### Setting up the webpage
Go to your Raspberry Pi's IP address and see whether the Apache2 default page is displayed, [like this](http://software.jmckinnon.co.uk/apache/). If it's displayed correctly then you can proceed to the next steps, if not, you likely did something wrong in your prerequisites setup.

Go to the Apache2 directory:
```
cd /var/www/html
```

Remove the default HTML page:
```
sudo rm index.html
```

Clone this git repository:
```
sudo git clone https://github.com/joedmck/rpi-remote-pc-start.git
```

This will put all the files into a new directory called rpi-remote-pc-start. Go into that directory:
```
cd rpi-remote-pc-start/
```

Remove the irrelevant files:
```
sudo rm README.md LICENSE SETUP.md SECURITY.md
```

Move the "webscripts" directory to the root directory:
```
sudo mv webscripts/ /
```

Move the remaining files into the previous directory:
```
sudo mv ./* ../
```

Since this won't move the .htaccess file, do that as well:
```
sudo mv .htaccess ../
```

Go to the main directory:
```
cd ../
```

Remove the rpi-remote-pc-start directory:
```
sudo rm -r rpi-remote-pc-start/
```

### Customising HTML/PHP/BASH Files
Since everyone has a slightly different setup, it's inevitable that you'll have to customise some of the scripts.
#### The shell script
```
sudo nano /webscripts/pcon.sh
```
The pin that my relay module is connected to on my Rasberry Pi's GPIOs is GPIO18. In Wiring Pi's numbering, this translates to 12, so if you're using a different pin/rasberry pi model, you may have to change each time the number 12 is mentioned in the script to whatever your setup requires.

Once this is configured properly, save and close the file by pressing Ctrl+x then y then enter.
Now you need to modify the file to make it executable:
```
sudo chmod +x /webscripts/pcon.sh
```

#### The PHP script
Open the file:
```
sudo nano scripts/pcon.php
```
You need to change where you will be redirected back after clicking the button, so the file that is provided has this as "[ip/web address]". You need to change this to whatever you'll be accessing this by.

E.g:
```
<meta http-equiv="refresh" content="0.1; URL=http://192.168.0.50">

...

<a href="http://192.168.0.50">click here.</a>
```

Note that you need to change it in two areas, as shown above.

Now make this script executable as well:
```
sudo chmod +x scripts/pcon.php
```

#### The HTML file
You can change the title and button text on the site.
First open the file:
```
sudo nano index.html
```
If you want to change the title, change the text where it says "Remote PC Start" on line 33.

If you want to change the button text, change it where it says "Turn PC On" on line 36.

### Making the .htpasswd file - for password protection (IMPORTANT!)

Create the file using the command:
```
sudo htpasswd -c /.htpasswd [your username here]
```
Then follow the prompts for the passwords, once finished the .htpasswd file should be created in the root directory.

To check this, use the command:
```
sudo ls -la /
```

A file called ".htpasswd" should be in the list returned.

### Precautionary Measures
I'm not too sure whether these steps are necessary but it may be worth doing them anyway, it won't hurt.
Give ownership of the two directories to the www-data user:
```
sudo chown -R www-data:www-data /webscripts
sudo chown -R www-data:www-data /var/www/html
```

### Final Steps

Now all you need to do is to restart the web server:
```
sudo service apache2 restart
```
Then try it out! Go to the web address or IP address of your Rasberry Pi and give it a go :)
