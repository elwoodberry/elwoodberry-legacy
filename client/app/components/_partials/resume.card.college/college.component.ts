import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'cardcollege',
  templateUrl: './college.component.html'
})

export class CardCollegeComponent {
	
	public title: string = "College Education";
	public subtitle: string = "Aquired skill sets, concepts and methods learned in college."
	public colleges: any[];

	constructor(){

		this.colleges = [
			{
				name: "The Art Institute of Pittsburgh",
				address: "420 Boulevard of the Allies",
				city: "Pittsburgh",
				state: "PA",
				zip: "15219",
				phone: "(800) 275-2470",
				graddate: "September 1998",
				degreetype: "Associate",
				degree: "Specialized Computer Animation",
				startDate: "July 1996",
				endDate: "September 1998",
				skills: [
					"3D Max",
					"Adobe Premiere",
					"Adobe Photoshop",
					"Adobe Illustrator"
				],
				imgurl: "http://portals.visiondesignstudio.net/Clients/AI/Assets/Msimages/images/logoheaders/CreateTomorrow/BlackRedHighResLogos/AIP.png",
				description: "The Art Institute of Pittsburgh is a private, for-profit, higher education institute located in Pittsburgh, Pennsylvania, United States, that emphasizes design education and career preparation for the creative job market."
			}
		];
		

		// The Art Institute of Pittsburgh
		// Address: 420 Boulevard of the Allies, Pittsburgh, PA 15219
		// Phone: (800) 275-2470
		// Graduation date: September 1998
		// The Art Institute of Pittsburgh is a private, for-profit, higher education institute located in Pittsburgh, Pennsylvania, United States, that emphasizes design education and career preparation for the creative job market.
		// Degree Type: Associate
		// Degree: Specialized Computer Animation
		// Software: 3D Max, Adobe Premiere, Adobe Photoshop, Adobe Illustrator
		// http://portals.visiondesignstudio.net/Clients/AI/Assets/Msimages/images/logoheaders/CreateTomorrow/BlackRedHighResLogos/AIP.png
	}
}
