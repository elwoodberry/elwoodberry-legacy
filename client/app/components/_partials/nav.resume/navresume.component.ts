import { Component } from '@angular/core';
import { Auth } from '../../../services/auth0/auth.service';

@Component({
	moduleId: module.id,
	selector: 'navresume',
	templateUrl: 'navresume.component.html'
})

export class NavResumeComponent {
	constructor(private auth:Auth){}

	launchResume(){
		console.log("button clicked");
		window.location.href='https://drive.google.com/open?id=1LIrTXkohL_crrxjxQeEsB_PzDn-cO5HqMPQlxgVed7E';
	}
}