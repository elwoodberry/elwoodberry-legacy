import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'cardself',
  templateUrl: './self.component.html'
})

export class CardSelfComponent {

	public selftaught:any[];

	constructor(){

		
		this.selftaught = [
			{
				skillname: "JavaScript",
				startDate: '08/01/2009',
				concepts: [
					"Methods (GET, POST)",
					"Data Types",
					"Asynchronous Calls",
					"Same-Origin Policy"
				],
				imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png",
				description: ""
			},
			{
				skillname: "jQuery",
				startDate: '08/01/2009',
				concepts: [
					"Methods (GET, POST)",
					"Data Types",
					"Asynchronous Calls",
					"Same-Origin Policy"
				],
				imgurl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/524px-JQuery_logo.svg.png",
				description: ""
			},
			{
				skillname: "Angular (v2)",
				startDate: '11/01/2016',
				concepts: [
					"Methods (GET, POST)",
					"Data Types",
					"Asynchronous Calls",
					"Same-Origin Policy"
				],
				imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/800px-AngularJS_logo.svg.png",
				description: ""
			}
		];
		

		console.log('Self Taught Has Loaded...');

	}
}
