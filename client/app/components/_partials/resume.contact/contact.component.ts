import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'contacttab',
	templateUrl: 'contact.component.html'
})

export class ContactTabComponent {

	public firstName: string = "Elwood";
	public middleName: string = "S.";
	public lastName: string = "Berry III";
	public title: string = "Full Stack JavaScript Developer";
	public email: string = "me@elwoodberry.com";
	public phone: string = "(469) 609-7444";
	public location: string = "Blacklick, OH";
	public citizenship: string = "United States Of America";
	public language: string = "English";
	public period: string = "10 years";
	public website: string = "www.elwoodberry.com";

} 
