import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'employer',
	templateUrl: 'employer.component.html'
})

export class EmployerComponent  {
	constructor(){
		console.log('\nCOMPONENT:EMPLOYER\n===========================\nEmployer Component Has Loaded...');
	}
}