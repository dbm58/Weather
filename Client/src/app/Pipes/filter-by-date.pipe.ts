import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe( { name: 'filterByDate' } )
export class FilterByDatePipe implements PipeTransform
{
  transform( value: any, unixTime: number ) : any
  {
    if( ! value )
      return null;

    let filterTime  = moment.unix( unixTime );

    if( unixTime == 0 )
      return value.hourly.data.slice( 0, 25 );
    else
      return value.hourly
                  .data
                  .filter(
                           ( d, i ) => 
                           {
                             let mTime = moment.unix( d.time );
                             return mTime.isSame( filterTime, 'day' )
                                 || mTime.subtract( 1, 'hour' ).isSame( filterTime, 'day' );
                           }
                         );
  }
}
