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
Create a file in /etc/profile.d (I called mine weather.sh), and set the API keys:
```
export darkSkyKey=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
export mctsKey=XXXXXXXXXXXXXXXXXXXXXXXXX
export openWeatherKey=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
See the Startup section (above) to get it running
