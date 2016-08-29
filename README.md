## usage  

```sh 
# copy sudoers config to the right location 
# this allows our bash script to restart systemd services 
sudo cp sudoers.d/webhook /etc/sudoers.d/webhook  

# create a .config file with variable assignments 
APP_PATH=/path/to/app 
APP_SERVICE=name_of.service  

# start the server 
npm start
```
