import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
       {
         name: 'noaaUrl'
       }
     )
export class NoaaUrlPipe implements PipeTransform
{
  transform( config ) : string
  {
    return `url(https://radar.weather.gov/ridge/lite/${config.mapUrl}?timestamp=${Date.now( )})`;
  }
}
