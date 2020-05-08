alias nest=/home/pi/Weather/Server/node_modules/@nestjs/cli/bin/nest.js
nest g s noaa --flat

To generate the grid for NOAA forecast, use the /points api:


https://api.weather.gov/points/43.044,-88.002


the response.properties.forecast item will contain the actual URL you need to
use, so no need to build strings.

Some of this stuff doesn't belong in this file.  It belongs in the noaa service source

