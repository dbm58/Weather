import { Component, OnInit, Input } from '@angular/core';

import { ChartDataSets, ChartOptions }  from 'chart.js';
import { Color, Label }                 from 'ng2-charts';
import { DateFormatPipe, FromUnixPipe } from 'ngx-moment';

import * as moment from 'moment';

@Component({
  selector:    'app-wind-chart',
  templateUrl: './wind-chart.component.html',
  styleUrls:   ['./wind-chart.component.css']
})
export class WindChartComponent implements OnInit
{
  @Input( ) forecastData;

  lineChartData:   ChartDataSets[];
  lineChartLabels: Label[];

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
      text:      'Wind Speed'
    },

    tooltips :
    {
      callbacks:
      {
        label: ( tooltipItem, data ) =>
        {
          let wind = data.datasets[0].data[tooltipItem.index];
          let gust = data.datasets[1].data[tooltipItem.index];
          let label = 'Wind ' + wind + ( ( !gust || wind == gust ) ? '' : ' Gust ' + gust );
          return label;
        }
      }
    },
  };

  lineChartColors: Color[] =
  [
    { borderColor: 'silver',    },
    { borderColor: 'lightgray', }
  ];

  lineChartLegend = true;
  lineChartType = 'line';
  lineChartPlugins = [];

  constructor( ) { }
  
  ngOnInit( )
  {
    this.lineChartLabels = this.forecastData.map( x => moment.unix( x.time ).format( ) );

    var pointImage = new Image( 30, 30 );
    pointImage.src = './assets/wi-wind-deg.svg';
    
    this.lineChartData =
    [
      {
        data:       this.forecastData.map( x => x.windSpeed ),
        fill:       false,
        label:      'Wind Speed',
        hitRadius:  20,
        pointStyle: pointImage,
        rotation:   this.forecastData.map( x => x.windBearing ),
      },
      {
        data:       this.forecastData.map(
                                           x => x.windGust != x.windSpeed
                                                            ? x.windGust 
                                                            : null 
                                         ),
        fill:       false,
        label:      'Wind Gust',
        hitRadius:  20
      }
    ];
  }
}
