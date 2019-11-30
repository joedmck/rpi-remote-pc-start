# Remote PC Boot System

This system allows you to, with a Raspberry Pi and a relay module, short out the power button pins on your motherboard remotely, hence turning it on.

You control the relay using a button on a password protected web page that runs on your Raspberry Pi, which then runs a script on the pi which closes the relay for 0.5 seconds, and turning your computer on.

### Installation
Copy `assets/` and `index.html` to your web server directory. Copy `pcon` to `/usr/local/bin` and `chmod +x` it. Protect the website with http basic authentication and set up SSL, as otherwise your credentials will be sent in plain text and be easily intercepted.

### TODO
- Installation script.
- Security instructions.
- Migrate to NodeJS to eliminate use of PHP.
- Inbuilt authentication (instead of http basic).
