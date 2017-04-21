import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'cardqualify',
  templateUrl: './qualify.component.html'
})

export class CardQualifyComponent {

  public qualifyTitle: string;
  public qualifySubtitle: string;
  public qualifyChartLabels: string[];
  public qualifyChartData: number[];
  public qualifyChartType: string = 'doughnut';
  public qualifyChartLegend: boolean = false;
  public qualifyOverviewData: any[];

  constructor(){

    // 'College': #ffa1b5
    // 'On The Job Learning': #86c7f3
    // 'Online Courses': #ffe199
    // 'Self Taught': #f0f2f4

    this.qualifyTitle = "Qualifications";
    this.qualifySubtitle = "High level break down of relevant education.";
    this.qualifyChartLabels = [
      'College', 
      'On The Job Learning', 
      'Online Courses', 
      'Self Taught'
    ];
    this.qualifyOverviewData = [
      {
        name: "College",
        icon: "fa-graduation-cap",
        hex: '#FFA1B5',
        percent: "10%"
      },
      {
        name: "On The Job Learning",
        icon: "fa-tasks",
        hex: '#86C7F3',
        percent: "20%"
      },
      {
        name: "Online Courses",
        icon: "fa-globe",
        hex: '#FFE199',
        percent: "20%"
      },
      {
        name: "Self Taught",
        icon: "fa-book",
        hex: '#F0F2F4',
        percent: "50%"
      }
    ];
    this.qualifyChartData = [
      10, // 'College'
      20, // 'On The Job Learning'
      20, // 'Online Courses'
      50 // 'Self Taught'
    ];
  }
}