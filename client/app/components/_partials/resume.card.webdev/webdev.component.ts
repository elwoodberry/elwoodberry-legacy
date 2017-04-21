import { Component } from '@angular/core';

// SERVICES
import { ProjectsService } from '../../../services/projects/projects.service';

@Component({
  moduleId: module.id,
  selector: 'cardwebdev',
  templateUrl: './webdev.component.html',
  providers: [ProjectsService]
})

export class CardWebdevComponent {

	public webdevTitle: string;
	public webdevSubtitle: string;
	public projects: string[];
	public webdevProjects: any[];


	constructor(private projectsService: ProjectsService){
		this.webdevTitle = "Web Development";
		this.webdevSubtitle = "The ability to deploy, manage and update the project.";

		this.webdevProjects = [
			{
				title: "title goes here for the project",
				description: "description for the project goes here.",
				imgurl: "https://travelhymns.com/wp-content/uploads/2016/09/Forex-Money.jpg",
				githuburl: "https://github.com/elwoodberry"
			},
			{
				title: "title goes here for the project",
				description: "description for the project goes here.",
				imgurl: "https://travelhymns.com/wp-content/uploads/2016/09/Forex-Money.jpg",
				githuburl: "https://github.com/elwoodberry"
			},
			{
				title: "title goes here for the project",
				description: "description for the project goes here.",
				imgurl: "https://travelhymns.com/wp-content/uploads/2016/09/Forex-Money.jpg",
				githuburl: "https://github.com/elwoodberry"
			},
			{
				title: "title goes here for the project",
				description: "description for the project goes here.",
				imgurl: "https://travelhymns.com/wp-content/uploads/2016/09/Forex-Money.jpg",
				githuburl: "https://github.com/elwoodberry"
			}
		];

		this.projectsService.getProjects().subscribe( projects =>{

			this.projects = projects[0].projects;

			// console.log(projects[0].projects);
		});
	}

}