import { Component } from '@angular/core';
 
@Component({
  moduleId: module.id,
  selector: 'cardsysadmin',
  templateUrl: './sysadmin.component.html'
})

export class CardSysadminComponent {

	public sysAdminTitle: string;
	public sysAdminSubtitle: string;
	public sysAdminChartOptions: any;
	public sysAdminChartLabels: string[];
	public sysAdminChartType: string = 'bar';
	public sysAdminChartLegend: boolean = false;
	public sysAdminChartData: any[];
	public sysAdminSkillSets: any[];

	constructor(){

		this.sysAdminTitle = "System Administration";
		this.sysAdminSubtitle = "The ability to get the enviornment up and running.";

		this.sysAdminChartOptions = { 
			scaleShowVerticalLines: false, 
			responsive: true 
		};

		this.sysAdminChartLabels = ['Linux', 'Google Compute Engine', 'Google App Engine', 'Google Cloud Storage'];

		this.sysAdminChartData = [
			{
				label: 'System Administration',
				data: [
					75, 
					40, 
					20, 
					15
				] 

			}
		];

		this.sysAdminSkillSets = [
			{
				label: 'Linux',
				description: 'Open source operating system for both desktop and server.'
			},
			{
				label: 'Google Compute Engine',
				description: 'Infrastructure as a Service (IaaS) component of Google Cloud Platform'
			},
			{
				label: 'Google App Engine',
				description: 'Cloud computing platform for developing and hosting web applications.'
			},
			{
				label: 'Google Cloud Storage',
				description: "RESTful online file storage web service for storing and accessing data on Google's infrastructure."
			}
		];

		// console.log(this.skillSets[0].term);
		// console.log('CardSysadminComponent');

	}

}