import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DateFormatPipe, FromUnixPipe }  from 'ngx-moment';

import { ForecastDataService } from '../../Services/forecast-data.service';

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.css']
})
export class TemperatureChartComponent implements OnInit
{
  data;

  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];

  lineChartOptions: object =
  {
    responsive: true,
    maintainAspectRatio: false,

    title:
    {
      position:  'bottom',
      fontColor: 'black',
      display:   true,
      text:      'Temperature'
    },

    legend: { display: false },

    tooltips:
    {
      enabled: false,

      custom: function(tooltipModel)
      {
        // Tooltip Element
        var tooltipEl = document.getElementById('chartjs-tooltip');

        // Create element on first render
        if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'chartjs-tooltip';
            tooltipEl.innerHTML = '<table></table>';
            document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = '0';
            return;
        }

        // Set caret Position
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltipModel.yAlign) {
            tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
            tooltipEl.classList.add('no-transform');
        }

        function getBody(bodyItem) {
            return bodyItem.lines;
        }

        // Set Text
        if (tooltipModel.body) {
            var titleLines = tooltipModel.title || [];
            var bodyLines = tooltipModel.body.map(getBody);

            var innerHtml = '<thead>';

            //titleLines.forEach(function(title) {
            //    innerHtml += '<tr><th>' + title + '</th></tr>';
            //});
            innerHtml += '</thead><tbody>';

            bodyLines.forEach(function(body, i) {
                var colors = tooltipModel.labelColors[i];
                var style = 'background:' + colors.backgroundColor;
                style += '; border-color:' + colors.borderColor;
                style += '; border-width: 2px';
                var span = '<span style="' + style + '">'+body+'</span>';
                innerHtml += '<tr><td>' + span + '</td></tr>';
            });
            innerHtml += '</tbody>';

            var tableRoot = tooltipEl.querySelector('table');
            tableRoot.innerHTML = innerHtml;
        }

        // `this` will be the overall tooltip
        var position = this._chart.canvas.getBoundingClientRect();

        // Display, position, and set styles for font
        tooltipEl.style.opacity = '1';
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
        tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
        tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
        tooltipEl.style.pointerEvents = 'none';
        tooltipEl.style.zIndex = '99';
      }
    }
  };

  lineChartColors: Color[] =
  [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    {
      borderColor: 'lightgray',
    }
  ];

  lineChartLegend = true;
  lineChartType = 'line';
  lineChartPlugins = [];

  constructor( private dataService: ForecastDataService )
  {
    var fromUnix  = ( x )    => ( new FromUnixPipe( ) ).transform( x );
    var format    = ( x, y ) => ( new DateFormatPipe( ) ).transform( x, y );

    this.data = dataService.getForecast( );
    var hourly = this.data.hourly.data.filter( (_,i) => i < 24 );

    this.lineChartLabels = hourly.map( x => format( fromUnix( x.time ), 'HH') );

    this.lineChartData =
    [
      {
        data:  hourly.map( x => x.temperature ),
        fill:  false,
        label: 'Actual Temperature'
      },
      {
        data:   hourly.map( x => x.apparentTemperature ),
        fill:   false,
        label: "'Feels Like' Temperature"
      }
    ];
  }

  ngOnInit() { }
}
