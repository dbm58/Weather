import { Pipe, PipeTransform } from '@angular/core';

import { environment } from './../../environments/environment';

@Pipe(
       {
         name: 'noaaUrl'
       }
     )
export class NoaaUrlPipe implements PipeTransform
{
  transform( config ) : string
  {
    return `${environment.noaaMapBaseUrl}${config.mapUrl}?timestamp=${config.timestamp}`;
  }
}
