import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DateFormatPipe, FromUnixPipe }  from 'ngx-moment';

import { ForecastDataService } from '../../Services/forecast-data.service';

@Component({
  selector: 'app-precip-chart',
  templateUrl: './precip-chart.component.html',
  styleUrls: ['./precip-chart.component.css']
})
export class PrecipChartComponent implements OnInit
{
  data;

  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions: object =
  {
    responsive: true,
    maintainAspectRatio: false,
    scales:
    {
      yAxes:
      [
        {
          ticks:
          {
            steps:     10,
            stepValue: 10,
            max:       100,
            min:       0
          }
        }
      ]
    },
    title:
    {
      position:  'bottom',
      fontColor: 'black',
      display:   true,
      text:      'Precipitation Probability'
    },
    legend: { display: false }
  };

  public lineChartColors: Color[] =
  [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    {
      borderColor: 'lightgray',
    }
  ];

  lineChartLegend  = true;
  lineChartType    = 'line';
  lineChartPlugins = [];

  constructor( private dataService: ForecastDataService )
  {
    var fromUnix  = ( x )    => ( new FromUnixPipe( ) ).transform( x );
    var format    = ( x, y ) => ( new DateFormatPipe( ) ).transform( x, y );

    this.data = dataService.getForecast( );
    var hourly = this.data.hourly.data.filter( (_,i) => i < 24 );

    this.lineChartLabels
      = hourly.map( x => format( fromUnix( x.time ), 'HH') );

    this.lineChartData =
    [
      {
        data: hourly.map( x => x.precipProbability * 100 ),
        fill: false,
        label: null
      }
    ];
  }

  ngOnInit() { }
}
