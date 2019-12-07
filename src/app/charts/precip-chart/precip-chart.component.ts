import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions }  from 'chart.js';
import { Color, Label }                 from 'ng2-charts';
import { DateFormatPipe, FromUnixPipe } from 'ngx-moment';

import { ForecastDataService } from '../../Services/forecast-data.service';

@Component({
  selector:    'app-precip-chart',
  templateUrl: './precip-chart.component.html',
  styleUrls:   ['./precip-chart.component.css']
})
export class PrecipChartComponent implements OnInit
{
  lineChartData:    ChartDataSets[ ];
  lineChartLabels:  Label[];

  lineChartOptions: object =
  {
    legend: { display: false },

    maintainAspectRatio: false,

    responsive: true,

    scales:
    {
      xAxes:
      [
        {
          type: 'time',
          time:
          {
            unit: 'hour',
            displayFormats: { hour: 'HH' }
          }
        }
      ],

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

    tooltips :
    {
      callbacks:
      {
        label: ( tooltipItem, data ) =>
        {
          let prob  = data.datasets[0].data[tooltipItem.index];
          let label = 'Precipitation probability ' + prob + "%";
          return label;
        }
      }
    },
  };

  lineChartColors: Color[] =
  [
    { borderColor: 'black'     },
    { borderColor: 'lightgray' },
  ];

  lineChartLegend  = true;
  lineChartType    = 'line';
  lineChartPlugins = [];

  fromUnix = ( x ) => ( new FromUnixPipe( ) ).transform( x );

  constructor( private dataService: ForecastDataService )
  {
    dataService.getForecast( )
               .subscribe( ( data ) => this.buildGraph( data ) );
  }

  ngOnInit() { }

  buildGraph( data )
  {
    var hourly = data.hourly.data.filter( (_,i) => i < 24 );

    this.lineChartLabels = hourly.map( x => this.fromUnix( x.time ) );

    this.lineChartData =
    [
      {
        data:      hourly.map( x => x.precipProbability * 100 ),
        fill:      false,
        label:     null, 
        hitRadius: 20,
      }
    ];
  }
}
