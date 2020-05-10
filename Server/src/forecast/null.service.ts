import { Injectable } from '@nestjs/common';

import * as moment from 'moment';


//--------------------------------------------------------------------------------
//  This is a dummy weather service.  It has all the data elements needed to
//  get the UI to display, but none of the actual data.  If you are creating a
//  new data source, this can also act as a guide to which data elements you
//  need to convert.
//--------------------------------------------------------------------------------


@Injectable()
export class NullService
{
  get( )
  {
    return {
             'provider':  'null',
             'latitude':  '0',
             'longitude': '0',
             'timezone':  '0',
             'currently':
             {
               'time':                moment( ).unix( ),
               'temperature':         '0',
               'apparentTemperature': '0',
               'windSpeed':           '0',
               'windBearing':         '0',
               'windGust':            '0',
               'iconClass':           'wi-day-sunny',
               'summary':             'Dummy weather data',
             },
             'daily':
             {
               'data':
               [ 
                 {
                   'time':               moment( ).unix( ),
                   'temperatureLow':     '0',
                   'temperatureHigh':    '0',
                   'iconClass':          'wi-day-sunny',
                   'windSpeed':          '0',
                   'windBearing':        '0',
                   'windGust':           '0',
                   'precipType':         '0',
                   'precipProbability':  '0',
                   'precipAccumulation': '0',
                 },
                 {
                   'time':               moment( ).unix( ),
                   'temperatureLow':     '0',
                   'temperatureHigh':    '0',
                   'iconClass':          'wi-day-sunny',
                   'windSpeed':          '0',
                   'windBearing':        '0',
                   'windGust':           '0',
                   'precipType':         '0',
                   'precipProbability':  '0',
                   'precipAccumulation': '0',
                 },
                 {
                   'time':               moment( ).unix( ),
                   'temperatureLow':     '0',
                   'temperatureHigh':    '0',
                   'iconClass':          'wi-day-sunny',
                   'windSpeed':          '0',
                   'windBearing':        '0',
                   'windGust':           '0',
                   'precipType':         '0',
                   'precipProbability':  '0',
                   'precipAccumulation': '0',
                 },
                 {
                   'time':               moment( ).unix( ),
                   'temperatureLow':     '0',
                   'temperatureHigh':    '0',
                   'iconClass':          'wi-day-sunny',
                   'windSpeed':          '0',
                   'windBearing':        '0',
                   'windGust':           '0',
                   'precipType':         '0',
                   'precipProbability':  '0',
                   'precipAccumulation': '0',
                 },
                 {
                   'time':               moment( ).unix( ),
                   'temperatureLow':     '0',
                   'temperatureHigh':    '0',
                   'iconClass':          'wi-day-sunny',
                   'windSpeed':          '0',
                   'windBearing':        '0',
                   'windGust':           '0',
                   'precipType':         '0',
                   'precipProbability':  '0',
                   'precipAccumulation': '0',
                 },
                 {
                   'time':               moment( ).unix( ),
                   'temperatureLow':     '0',
                   'temperatureHigh':    '0',
                   'iconClass':          'wi-day-sunny',
                   'windSpeed':          '0',
                   'windBearing':        '0',
                   'windGust':           '0',
                   'precipType':         '0',
                   'precipProbability':  '0',
                   'precipAccumulation': '0',
                 },
               ]
             },
           };
  }
}
