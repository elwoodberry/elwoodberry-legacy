import { Component } from '@angular/core';

// SERVICES
import { ProjectsService } from '../../../services/projects/projects.service';

@Component({
	moduleId: module.id,
	selector: 'github',
	templateUrl: 'github.component.html',
	providers: [ProjectsService]
})

export class GithubComponent  {

	// PROPERTIES
	projects: string[];

	// CONSTRUCTOR
	constructor(private projectsService: ProjectsService){
		// console.log('ProjectsComponent');

		this.projectsService.getProjects().subscribe(projects =>{
			this.projects = projects[0].projects;
		});
	}
}