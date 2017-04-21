import { Component } from '@angular/core';
 
@Component({
  moduleId: module.id,
  selector: 'cardoverview',
  templateUrl: './overview.component.html'
})

export class CardOverviewComponent {

  public overviewTitle: string;
  public overviewSubtitle: string;
  public overviewChartLabels: string[];
  public overviewChartData: number[];
  public overviewChartType: string = 'doughnut';
  public overviewChartLegend: boolean = false;

  constructor(){

    // Sys Admin: #ffa1b5
    // Web Development: #86c7f3
    // Back End: #ffe199
    // Front End: #f0f2f4
    // Design: #93d9d9
    // Mobile: #c0d6e1

    this.overviewTitle = "Overview";
    this.overviewSubtitle = "Full stack skillsets of both back-end and front-end technologies.";
    this.overviewChartLabels = [
      'System Admin', 
      'Web Development', 
      'Back End', 
      'Front End', 
      'Design', 
      'Mobile'
    ];
    this.overviewChartData = [
      10, // System Admin
      12, // Web Development
      10, // Back End
      27, // Front End
      27, // Design
      14 // Mobile
    ];
  }
}