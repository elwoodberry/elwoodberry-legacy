import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'mngmntresume',
	templateUrl: 'mngmntresume.component.html'
})

export class MngmntResumeComponent  {
	constructor(){
		console.log('Management Resume Component Has Loaded');
	}
}
