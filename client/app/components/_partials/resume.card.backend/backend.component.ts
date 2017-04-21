import { Component } from '@angular/core';
 
@Component({
	moduleId: module.id,
	selector: 'cardbackend',
	templateUrl: './backend.component.html'
})

export class CardBackendComponent {

	public backendTitle: string;
	public backendSubtitle: string;
	public backendChartOptions: any;
	public backendChartLabels: string[];
	public backendChartType: string = 'bar';
	public backendChartLegend: boolean = false;
	public backendChartData: any[];
	public backendSkillsetData: any[];

	constructor(){

		//
		this.backendTitle = "Back End Technologies";
		this.backendSubtitle = "The ability to serve the content of the project.";

		// 
		this.backendChartOptions = { 
			scaleShowVerticalLines: false, 
			responsive: true 
		};

		//
		this.backendChartLabels = [
			'NodeJS', 
			'MongoDB',
			'NPM',
			'GulpJS'
		];

		//
		this.backendChartData = [
			{
				label: 'Back End',
				data: [
					50, // 'NodeJS'
					45, // 'MongoDB'
					60, // 'NPM'
					41 // 'GulpJS'
				]
				
			}
		];

		// 
		this.backendSkillsetData = [
			{
				label: 'NodeJS',
				description: 'Open-source, cross-platform JavaScript runtime environment.'
			},
			{
				label: 'MongoDB',
				description: 'Cross-platform and open-source document-oriented NoSQL database.'
			},
			{
				label: 'NPM',
				description: 'Package manager'
			},
			{
				label: 'GulpJS',
				description: 'Task runner.'
			}
		];
		
		// console.log('Card Backend Component');
	}

}