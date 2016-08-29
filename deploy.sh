#!/bin/bash

echo 'Deploy :) \n'

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo ${DIR}
source ${DIR}/.config

cd ${APP_PATH}
git pull origin master
npm install --verbose
sudo systemctl restart ${APP_SERVICE}
