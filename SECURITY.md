# Security Information

### SSL
The main protection from someone getting on to the page is HTTP basic authentication. Please note that this sends your credentials unencrypted to the server, so if you are doing this from outside your network, you should definitely make the site HTTPS, so that your credentials are secured.<br/>
I did this using a website called [SSLforFree](https://www.sslforfree.com/), however each time you renew your SSL certificate, you have to prove you own the site. You prove your ownership of the site by putting some files on it, so it can check they're there and give you the certificate. This unfortunately means that you have to remove the authentication. So I would advise that you temporarily move everything out of the ```/var/www/html``` directory so that no one can see what's usually in it, and just put the files that SSL For Free give you. Then move everything back once you've got the authentication re-enabled.<br/>
Then you need to set it up for HTTPS in the apache configuration files, [here](https://www.digitalocean.com/community/tutorials/how-to-create-a-ssl-certificate-on-apache-for-ubuntu-14-04) is a good guide for that.

### IP Whitelisting
Also if you only want to be able to turn it on from a specific place (e.g. work or school), you could block every IP address except that of your own network and your work/school.<br/>
[This](https://serverfault.com/questions/776252/allow-access-to-apache-server-from-only-one-ip-address) forum post explains how to do this with apache2.

### SSH/RDP
Other security vulnerabilities are essentially just having SSH/RDP open to the world, just make sure you have everything secured properly with good passwords and everything.