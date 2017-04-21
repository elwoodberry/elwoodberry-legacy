import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'http404',
	templateUrl: 'http404.component.html'
})

export class Http404Component  {
	constructor(){
		console.log('404 Page Has Loaded...');
	}
}