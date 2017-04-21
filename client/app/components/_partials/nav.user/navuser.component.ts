import { Component } from '@angular/core';
import { Auth } from '../../../services/auth0/auth.service';

@Component({
	moduleId: module.id,
	selector: 'navuser',
	templateUrl: 'navuser.component.html'
})

export class NavUserComponent {
	constructor(private auth:Auth){}
}