// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  apiBaseUrl:          'http://localhost:3000',
  lightningMapBaseUrl: 'http://map.blitzortung.org/index.php',
  lightningMapLatLon:  '#6.5/44.542/-88.728',
  noaaMapBaseUrl:      'https://radar.weather.gov/ridge/lite/',
  busStopId:           '582',
  alertBusStopId:      '2974',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
