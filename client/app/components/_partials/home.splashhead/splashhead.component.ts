import { Component } from '@angular/core';

// SERVICES
import { EmployeeService } from '../../../services/employee/employee.service';

@Component({
	moduleId: module.id,
	selector: 'splashhead',
	templateUrl: 'splashhead.component.html',
	providers: [EmployeeService]
})

export class SplashheadComponent {

	// PROPERTIES 
	firstName: string;
	middleName: string;
	lastName: string;
	title: string;
	summary: string;

	// CONSTRUCTOR
	constructor(private employeeService: EmployeeService){

		this.employeeService.getEmployee().subscribe(employee =>{
			this.firstName = employee[0].firstName;
			this.middleName = employee[0].middleName;
			this.lastName = employee[0].lastName;
			this.title = employee[0].title;
			this.summary = employee[0].summary;
		});

	// console.log('\nCOMPONENT:SPLASH\n===========================\nSplash Head Component Has Loaded...');
	}

}