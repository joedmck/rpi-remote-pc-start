# Remote PC Boot System

This system allows you to, with a Raspberry Pi and a relay module, short out the power button pins on your motherboard remotely, hence turning it on.
You control the relay using a button on a password protected web page that runs on your Raspberry Pi, which then runs a script on the pi which closes the relay for 0.5 seconds, and turning your computer on.

[Here](https://software.jmckinnon.co.uk/pc-start/) is a dummy version of the site, that doesn't have password protection, nor does it turn your PC on, but it will give you an idea of what the site looks like.

If you want to set this up for yourself, see the [setup instructions.](SETUP.md)