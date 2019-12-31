import { Component, OnInit, Input } from '@angular/core';

import { ChartDataSets, ChartOptions }  from 'chart.js';
import { Color, Label }                 from 'ng2-charts';
import { DateFormatPipe, FromUnixPipe } from 'ngx-moment';

import * as moment from 'moment';

@Component({
  selector:    'app-precip-chart',
  templateUrl: './precip-chart.component.html',
  styleUrls:   ['./precip-chart.component.css']
})
export class PrecipChartComponent implements OnInit
{
  @Input( ) forecastData;

  lineChartData:    ChartDataSets[ ];
  lineChartLabels:  Label[];

  //  two line charts with different axes:
  //  https://stackoverflow.com/questions/38085352/how-to-use-two-y-axes-in-chart-js-v2/38094165#38094165
  //  I really want a line and bar chart here; precip amount in the bar chart
  //  see: https://www.chartjs.org/docs/latest/charts/mixed.html
  //
  //  todo:  need to set the tooltip to indicate precip type, and
  //  intensity/accumulation

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
          id:   'prob-x',
          type: 'time',
          time:
          {
            unit: 'hour',
            displayFormats: { hour: 'HH' }
          }
        },
        {
          id:   'accum-x',
          type: 'category',
          display: false,
        }
      ],

      yAxes:
      [
        {
          id:          'prob',
          type:        'linear',
          position:    'left',
          ticks:
          {
            steps:     10,
            stepValue: 10,
            max:       100,
            min:       0
          }
        },
        {
          id:          'accum',
          type:        'linear',
          position:    'right',
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
          let amt   = data.datasets[1].data[tooltipItem.index];
          let label = `Precipitation probability ${prob}%; Amount ${amt}`;
          return label;
        }
      }
    },
  };

  lineChartColors: Color[] =
  [
    { borderColor: 'black' },
    { borderColor: 'red'   },
  ];

  lineChartLegend  = true;
  lineChartType    = null;
  lineChartPlugins = [];

  constructor( ) { }

  ngOnInit( )
  {
    this.lineChartLabels = this.forecastData.map( x => moment.unix( x.time ).format( ) );

    this.lineChartData =
    [
      {
        data:      this.forecastData.map( x => x.precipProbability * 100 ),
        fill:      false,
        label:     null, 
        hitRadius: 20,
        type:      'line',
        xAxisID:   'prob-x',
        yAxisID:   'prob',
      },
      {
      data:      this.forecastData.map( x => ( x.precipAccumulation || x.precipIntensity || 0 ) ),
        fill:      true,
        backgroundColor: "#ff0000",
        borderColor: "#ff0000",
        label:     null, 
        hitRadius: 20,
        type:      'bar',
        xAxisID:   'accum-x',
        yAxisID:   'accum',
      }
    ];
  }
}
