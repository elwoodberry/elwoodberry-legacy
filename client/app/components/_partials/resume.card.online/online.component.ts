import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'cardonline',
  templateUrl: './online.component.html'
})

export class CardOnlineComponent {

	public title: string = "Online Education";
	public subtitle: string = "Aquired skill sets, concepts and methods learned online."
	public online:any[];

	constructor(){

  	this.online = [
			{
				companyName: "Code School",
				url: "https://www.codeschool.com/",
				startDate: '11/01/2013',
				endDate: 'Present',
				skills: [
					"JavaScript",
					"AngularJS (v1)",
					"GitHub",
					"MongoDB"
				],
				imgurl: "https://www.codeschool.com/assets/pages/brand/downloads/brand-horizontal-tagline-a0192e1b76e417c6083a0f1885bea8ab24cae64771aa9d719fe45f2ba7bf4856.png",
				description: "Code School is an online learning destination for existing and aspiring developers that teaches through entertaining content."
			},
			{
				companyName: "Lynda",
				url: "https://www.lynda.com/",
				startDate: '11/01/2013',
				endDate: ' 01/29/2017',
				skills: [
					"Ionic",
					"AngularJS (v1)"
				],
				imgurl: "https://upload.wikimedia.org/wikipedia/en/b/b1/Official-company-logo-for-lynda.com_400x400px.png",
				description: ""
			},
			{
				companyName: "YouTube",
				url: "https://www.youtube.com/",
				startDate: '07/01/2013',
				endDate: 'Present',
				skills: [
					"JavaScript",
					"AngularJS (v1)",
					"GitHub",
					"MongoDB"
				],
				imgurl: "https://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png",
				description: ""
			}
		];

	}
}
