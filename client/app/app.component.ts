import { Component } from '@angular/core';
import { Auth } from './services/auth0/auth.service';


@Component({
  selector: 'elwoodberry',
  template: `<router-outlet></router-outlet>`
})

export class AppComponent  {
	constructor(private auth:Auth){}
}