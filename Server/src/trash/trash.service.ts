import { Injectable, Logger } from '@nestjs/common';

import * as moment from 'moment';

@Injectable( )
export class TrashService
{
  constructor( private readonly logger: Logger )
  {
    this.logger.setContext( TrashService.name );
    this.logger.log( 'Loading...' );
  }

  //  holidays are:
  //      new year's jan 1
  //      memorial day last monday in may
  //      independence day july 4
  //      labor day first monday of september
  //      thanksgiving  fourth thursday in november
  //      christmas  dec 25
  //
  //  first week of 2020 is garbage/recycling
  //
  //  yard waste april-13 through october 9
  //
  static date:       Date;
  static isTrash:    boolean;
  static isRecycle:  boolean;
  static isYardWast: boolean;

  //  Holidays
  //
  //  OK.  Don't use discrete variables.  Instead, use an array, so that we
  //  can do linqy things with it.
  //  then we can find the corresponding holiday:
  //
  //  holidays.where( h => h.diff( today, 'days' ) < 5 )
  //          .any( ); 
  //
  //  I don't remember what the ES6 equivalents are.  Look it up.

  //  todo:  get typescript support for vim:
  //  https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim

  static currYear = moment( ).year( );
  static newYears = moment( [ TrashService.currYear, 0, 1 ] );
  static memorialDay = moment( [ TrashService.currYear, 4, 31 ] ).startOf( 'isoWeek' );
  static july4 = moment( [ TrashService.currYear, 6, 4 ] );
  static sept1 = moment( [ TrashService.currYear, 8, 1 ] );
  static laborDay =
    ( TrashService.sept1.day( ) <= 1 )                                //>
        ? TrashService.sept1.day( 'Monday' )
        : TrashService.sept1.add( 1, 'weeks' ).day( 'Monday' );
  static nov1 = moment( [ TrashService.currYear, 10, 1 ] );
  static thanksgiving = 
    (
      ( TrashService.nov1.day( ) <= 4 )                                //>
            ? TrashService.nov1.day( 'Thursday' )
            : TrashService.nov1.add( 1, 'weeks' ).day( 'Thursday' )
    ).add( 3, 'weeks' );
  static christmas = moment( [ TrashService.currYear, 11, 25 ] );

  getDate( subscriber )
  {
    this.logger.log( 'Calculating trash collection dates' );

    //  get today
    //  if equal to static, return statics
    //  is Friday?
    //  is Saturday?
    //  no?  return false
    //  is Saturday
    //    is holiday week?
    //       calculate recycle, yardwaste
    //       return
    //  is Friday?
    //    calculate recycle, yardwaste
    //    return
    subscriber.next( 'hello observable 5' );
    let today = moment( );
    let firstPickup = moment( [ 2020, 0, 3 ] );
    subscriber.next( today.diff( firstPickup, 'days' ) );
    subscriber.next( TrashService.thanksgiving );
    subscriber.complete( );
  }
}
