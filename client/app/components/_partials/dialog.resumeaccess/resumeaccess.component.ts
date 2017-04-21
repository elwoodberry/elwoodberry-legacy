import { Component } from '@angular/core';
import { Auth } from '../../../services/auth0/auth.service';

@Component({
	moduleId: module.id,
	selector: 'resumeaccess',
	templateUrl: 'resumeaccess.component.html'
})

export class ResumeAccessComponent  {

	constructor(private auth:Auth){
		//console.log('Dialog: Resume Access');
	}

	tiles = [
		{text: 'One', cols: 1, rows: 1, color: 'lightblue'},
		{text: 'Two', cols: 2, rows: 1, color: 'lightgreen'},
		{text: 'Three', cols: 1, rows: 1, color: 'lightpink'}
	];
}