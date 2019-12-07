import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions }  from 'chart.js';
import { Color, Label }                 from 'ng2-charts';
import { DateFormatPipe, FromUnixPipe } from 'ngx-moment';

import { ForecastDataService } from '../../Services/forecast-data.service';

@Component({
  selector:    'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls:   [ './temperature-chart.component.css' ]
})
export class TemperatureChartComponent implements OnInit
{
  lineChartData:   ChartDataSets[ ];
  lineChartLabels: Label[ ];

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
      ]
    },
    
    title:
    {
      position:  'bottom',
      fontColor: 'black',
      display:   true,
      text:      'Temperature'
    },

    tooltips :
    {
      callbacks:
      {
        label: ( tooltipItem, data ) =>
        {
          let temp  = data.datasets[0].data[tooltipItem.index];
          let chill = data.datasets[1].data[tooltipItem.index];
          let label = 'Temperature: ' + Math.round( temp )
                    + '; Feels like: ' + Math.round( chill )
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
        data:      hourly.map( x => x.temperature ),
        fill:      false,
        label:     'Actual Temperature',
        hitRadius: 20,
      },
      {
        data:      hourly.map( x => x.apparentTemperature ),
        fill:      false,
        label:     "'Feels Like' Temperature",
        hitRadius: 20,
      }
    ];
  }
}
