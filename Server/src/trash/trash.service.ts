import { Injectable, Logger } from '@nestjs/common';

import * as moment from 'moment';

//----------------------------------------------------------------------
//  Calculate trash and recycling pick-up dates.
//
//  Holidays are:
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
//----------------------------------------------------------------------

type trashDatesStruct =
  {
    date:          Date;
    dayOfWeek:     number;
    isHolidayWeek: boolean;
    isTrash:       boolean;
    isRecycle:     boolean;
    isYardWaste:   boolean;
  };

@Injectable( )
export class TrashService
{
  constructor( private readonly logger: Logger )
  {
    this.logger.setContext( TrashService.name );
    this.logger.log( 'Loading...' );
  }

  private trashDates: trashDatesStruct;

  private holidays = [ ];

  loadHolidays( )
  {
    if( this.holidays.length > 0 )
      return;

    let currYear = moment( ).year( );
    this.holidays.push( moment( [ currYear, 0, 1 ] ) );  // new years
    this.holidays.push( moment( [ currYear, 4, 31 ] ).startOf( 'isoWeek' ) ); // memorial day
    this.holidays.push( moment( [ currYear, 6, 4 ] ) ); // july 4;
    let sept1 = moment( [ currYear, 8, 1 ] );
    this.holidays.push(
                        ( sept1.day( ) <= 1 )                                //>
                          ? sept1.day( 'Monday' )
                          : sept1.add( 1, 'weeks' ).day( 'Monday' )
                      ); // labor day
    let nov1 = moment( [ currYear, 10, 1 ] );
    this.holidays.push(
                        (
                          ( nov1.day( ) <= 4 )                                //>
                            ? nov1.day( 'Thursday' )
                            : nov1.add( 1, 'weeks' ).day( 'Thursday' )
                        ).add( 3, 'weeks' )
                      );  // thanksgiving
    this.holidays.push( moment( [ currYear, 11, 25 ] ) ); // christmas
  }


  getDate( subscriber )
  {
    this.logger.log( 'Calculating trash collection dates' );

    this.loadHolidays( );

    this.setValues( moment( ) );

    subscriber.next( this.trashDates );
    subscriber.complete( );
  }

  private setValues( today )
  {
    this.trashDates = {
                        date:          today,
                        dayOfWeek:     today.day( ),
                        isHolidayWeek: false,
                        isTrash:       false,
                        isRecycle:     false,
                        isYardWaste:   false,
                      };

    if( this.trashDates.dayOfWeek < 5 )
      return;

    this.trashDates.isHolidayWeek =
      this.holidays
          .map( h => today.diff( h, 'days' ) )
          .filter( h => h > 0 )
          .some( h => h < 6 );

    this.trashDates.isTrash = ( ( this.trashDates.dayOfWeek == 5 ) && !this.trashDates.isHolidayWeek )
                           || ( ( this.trashDates.dayOfWeek == 6 ) && this.trashDates.isHolidayWeek  );

    if( !this.trashDates.isTrash )
      return;

    let friday = moment( today ).startOf( 'week' ).add( 5, 'days' );
    let refDate = moment( [ 2020, 0, 3 ] );
    let refDiff = friday.diff( refDate, 'days' );
    
    this.trashDates.isRecycle   = refDiff % 14 == 0;
    this.trashDates.isYardWaste = refDiff % 14 == 7;
  }
}
