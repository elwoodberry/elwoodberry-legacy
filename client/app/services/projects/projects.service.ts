import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ProjectsService {
	
	constructor(private http: Http){
		// console.log('\nSERVICE:PROJECTS\n===========================\nProjects Service initialized...');
	}

	getProjects(){
		return this.http.get('api/projects.json')
			.map(res => res.json());
	}                   
}