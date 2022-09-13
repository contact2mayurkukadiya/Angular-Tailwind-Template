import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { chartJSON } from '@configJson';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  chartData: any = JSON.parse(JSON.stringify(chartJSON as any));
  data: any = this.chartData.chartData;
  chart_usage : any = `
  import { ChartJSModule } from "";

  @NgModule({
    imports: [ChartJSModule,...]
  })
  export class AppModule(){}
  `;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.newChart(this.data);
  }

  newChart(data) {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      var chartLine = new Chart(element.id, {
        type: element.type,
        data: element.chart_data,
        options: element.chart_options as any,
      });
    }
  }

  /* {
    "id": "chartScatter",
    "type": "scatter",
    "title": "Scatter Chart",
    "chart_data": {
      "datasets": [{
        "label": "Scatter Dataset",
        "data": [{
            "x": -10,
            "y": 0
        }, {
            "x": 0,
            "y": 10
        }, {
            "x": 10,
            "y": 5
        }]
    }]
    },
    "chart_options": {}
  } */
}
