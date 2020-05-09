# Weather

![](./ScreenShots/kiosk.jpg)

"Weather" is an app designed to run on a Raspberry Pi touchscreen kiosk.  It provides current weather conditions, 5 day weather forecast, and current transit status.

## Usage
See the [Documentation](./Documentation/Usage)

## Startup
```batchfile
set darkSkyKey=xxxxxx
set mctsKey=yyyyy
cd Weather/Server
npm run start &
cd ../Client
ng serve &
chromium-browser --noerrdialogs --incognito --kiosk http://localhost:4200
```
In order to be able to view from another machine, use this instead:
```
ng serve --host 0.0.0.0 --disable-host-check --public-host http://weather.local
```

## Installation
Clone the repo:
```
git clone https://github.com/dbm58/Weather.git
```
Resolve dependencies
```
cd Weather/Server
npm install
cd ../Client
npm install
```

## Configuration
Create a file in /etc/profile.d (I called mine weather.sh), and set the API keys:
```
export darkSkyKey=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
export mctsKey=XXXXXXXXXXXXXXXXXXXXXXXXX
export openWeatherKey=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
export climacellKey=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Change the values in /Server/.env to reflect your location and other prefrences:
```
PORT=3000
weather-noaa-map-url=this is a test
lat=43.044
lon=-88.002
```

Change the values in /Client/src/environments/environment.ts as needed:
```
export const environment = {
  production: false,

  apiBaseUrl:          'http://localhost:3000',
  apiPort:             '3000',
  //  Set the following is the api is running on another machine
  apiHost:             null,
  lightningMapBaseUrl: 'http://map.blitzortung.org/index.php',
  lightningMapLatLon:  '#6.5/44.542/-88.728',
  noaaMapBaseUrl:      'https://radar.weather.gov/ridge/lite/',
  busStopId:           '582',
  alertBusStopId:      '2974',

  //  for forecasts
  lat:                 '43.044',
  lon:                 '-88.002',
};
```
Set up the servers to run automatically when booted.  This is done by adding an entry to crontab.  Run:
```
crontab -e
```
then add the following line in the editor that pops up:
```
@reboot /home/pi/Weather/start-servers.sh
```

Set up the browser to run automatically when LXDE (the default GUI on the RPi) runs:
1.  cd ~/.config/lxsession/LXDE-pi
1.  if the above directory doesn't exist, create it, and copy /etc/xdg/lxsession/LXDE-pi/autostart into it.
1.  edit autostart, and add the following:
```
@/home/pi/Weather/start-client.sh
```
