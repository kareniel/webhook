#!/bin/bash

echo 'Deploy :) \n'

source ./.config

cd ${APP_PATH}
git pull origin master
npm install
systemctl restart ${APP_SERVICE}
