#!/bin/bash

pushd /home/pi/Weather/Server
# npm start > /home/pi/Weather/log/forecast.server.log 2>&1 &
npm run start:dev > /home/pi/Weather/log/forecast.server.log 2>&1 &
popd
pushd /home/pi/Weather/Client
#  the following runs the server so that you can access it from another machine (good for development).
#  for production use, you probably just want to run "ng serve".
ng serve --host 0.0.0.0 --disable-host-check --public-host http://weather.local > /home/pi/Weather/log/angular.server.log 2>&1 &
popd
