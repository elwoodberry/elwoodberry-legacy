import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'cardonjob',
  templateUrl: './onjob.component.html'
})

export class CardOnjobComponent {

	public title: string = "On The Job Education";
	public subtitle: string = "Aquired skill sets, concepts and methods learned on the job."
	public onjob:any[];

  constructor(){
  	this.onjob = [
			{
				companyName: "Media General, www.dealtaker.com",
				city: "Plano",
				state: "TX",
				startDate: '08/01/2009',
				endDate: '06/01/2011',
				skills: [
					"Project Management",
					"AGILE/SCRUM methodologies",
					"PHP",
					"MVC (Zend, Yii)"
				],
				imgurl: "https://static1.squarespace.com/static/55019c1ae4b0472e6124b8d0/5501c1eee4b03b5f8208823e/5501c1efe4b0a33931094299/1432755286357/Media-General-logo.png",
				description: "Our local and offsore team was tasked with updating the UI of the company site."
			},
			{
				companyName: "Ignite Technologies",
				city: "Frisco",
				state: "TX",
				startDate: '8/01/2011',
				endDate: '07/01/2013',
				skills: [
					"JavaScript Concepts (Prototypes, Inheritance, etc)",
					"jQuery"
				],
				imgurl: "https://i.ytimg.com/i/PKW1KejMaOiN7-cL6gvjLw/mq1.jpg",
				description: "I personally inherited the maintentence of an existing custom built LMS system used by McDonalds Learning Centers."
			}
		];
  }
}
