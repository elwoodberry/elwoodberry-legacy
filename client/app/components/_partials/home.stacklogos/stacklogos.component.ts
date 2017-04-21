import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'stacklogos',
	templateUrl: 'stacklogos.component.html'
})

export class StacklogosComponent  {
	constructor(){
		console.log('\nCOMPONENT:STACKLOGOS\n===========================\nStack Logos Component Has Loaded...');
	}
}