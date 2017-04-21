import { Component } from '@angular/core';
 
@Component({
  moduleId: module.id,
  selector: 'carddesign',
  templateUrl: './design.component.html'
})

export class CardDesignComponent {

	public designTitle: string;
	public designSubtitle: string;
	public designBarChartOptions: any;
	public designBarChartLabels: string[];
	public designBarChartType: string = 'bar';
	public designBarChartLegend: boolean = false;
	public designBarChartData: any[];
	public designSkillsetData: any[];

	constructor(){

		this.designTitle = "Design";
		this.designSubtitle = "Ability to deliver an intutive user experience.";

		this.designBarChartOptions = {
			scaleShowVerticalLines: false,
			responsive: true
		};

		this.designBarChartLabels = [
			'PhotoShop', 
			'Illustrator', 
			'After Effects', 
			'FireWorks'
		];

		//  developed and manufactured by Adobe Systems Inc.
		this.designSkillsetData = [
			{
				label: 'PhotoShop',
				description: 'Flagship image editing software.'
			},
			{
				label: 'Illustrator',
				description: 'Industry standard vector graphics editor.'
			},
			{
				label: 'After Effects',
				description: 'Visual effects, motion graphics, and compositing application.'
			},
			{
				label: 'FireWorks',
				description: 'Bitmap and vector graphics editor.'
			}
		];

		this.designBarChartData = [
			{
				label: 'Design',
				data: [
					95, // PhotoShop
					93, // Illustrator
					55, // After Effects
					45, // FireWorks
				]
			}
		];

		// console.log('Card Design Component');
	}
}