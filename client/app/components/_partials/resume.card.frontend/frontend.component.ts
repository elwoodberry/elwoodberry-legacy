import { Component } from '@angular/core';
 
@Component({
  moduleId: module.id,
  selector: 'cardfrontend',
  templateUrl: './frontend.component.html'
})

export class CardFrontendComponent {

	public frontendTitle: string;
	public frontendSubtitle: string;
	public frontendSkillsets: any[];
	public frontendChartOptions: any;
	public frontendChartLabels: string[];
	public frontendChartData: any[];
	public frontendChartType: string = 'bar';
	public frontendChartLegend: boolean = false;

	constructor(){
		this.frontendTitle = "Front End Development";
		this.frontendSubtitle = "The ability to present the project.";
		
		// 
		this.frontendSkillsets = [
			{
				label: 'HTML / HTML5',
				description: 'Hypertext Markup Language revision 5 (HTML5). Structure and presentation of web content.'
			},
			{
				label: 'CSS3 / SASS / Media Queries',
				description: 'Cascading style sheet, indented syntax nested metalanguage (variables, mixins).'
			},
			{
				label: 'jQuery',
				description: 'Simple client side scripting cross-platform JavaScript library.'
			},
			{
				label: 'AngularJS 2',
				description: 'JavaScript-based open-source front-end web application framework.'
			},
			{
				label: 'Responsive Design',
				description: 'Flexible layouts, flexible images and cascading style sheet media queries.'
			}
		];
		
		// 
		this.frontendChartOptions = {
			scaleShowVerticalLines: false,
			responsive: true
		};

		//
		this.frontendChartLabels = [
			'HTML / HTML5', 
			'CSS3 / SASS / Media Queries',
			'jQuery', 
			'AngularJS 2', 
			'Responsive Design'
		];

		// 
		this.frontendChartData = [
			{
				label: 'Front End Development',
				data: [
					90, 
					89, 
					85, 
					60, 
					80
				]
			}
		];
	}

}