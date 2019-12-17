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

    let filterExpr = ( unixTime == 0 )
                   ? ( _, i ) => i < 25
                   : ( d, i ) => 
                     {
                       let mTime = moment.unix( d.time );
                       return mTime.isSame( filterTime, 'day' )
                           || mTime.subtract( 1, 'hour' ).isSame( filterTime, 'day' );
                     }

    return value.hourly
                .data
                .filter( filterExpr )
  }

}
