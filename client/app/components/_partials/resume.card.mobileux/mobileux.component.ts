import { Component } from '@angular/core';
 
@Component({
  moduleId: module.id,
  selector: 'cardmobileux',
  templateUrl: './mobileux.component.html'
})

export class CardMobileuxComponent {
	
	public mobileTitle: string;
	public mobileSubtitle: string;
	public mobileBarChartOptions: any;
	public mobileBarChartLabels: string[];
	public mobileBarChartType: string = 'bar';
	public mobileBarChartLegend: boolean = false;
	public mobileBarChartData: any[]; 
	public mobileSkillsetData: any[];

	constructor(){

		this.mobileTitle = "Mobile";
		this.mobileSubtitle = "The ability to build the project as a mobile app.";

		this.mobileBarChartOptions = {
			scaleShowVerticalLines: false,
			responsive: true
		};

		this.mobileBarChartLabels = [
			'xCode',
			'Objective C / Swift',
			'Ionic 2',
			'Android Studio',
		];

		this.mobileSkillsetData = [
			{
				label: 'xCode',
				description: 'Environment for developing software for macOS, iOS, watchOS and tvOS.'
			},
			{
				label: 'Objective C / Swift',
				description: 'Programming language for macOS, iOS, watchOS and tvOS.'
			},
			{
				label: 'Ionic 2',
				description: 'Open-source SDK for hybrid mobile app development.'
			},
			{
				label: 'Android Studio',
				description: 'Environment for the Android platform'
			}
		];

		this.mobileBarChartData = [
			{
				label: 'Mobile',
				data: [
					65, // 'xCode'
					59, // 'Objective C'
					80, // 'Swift'
					56, // 'Ionic 2'
					55, // 'Android Studio'
				]
			}
		];

		// console.log('CardMobileuxComponent');
	}

}