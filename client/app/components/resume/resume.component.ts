// ANGULAR
import { Component } from '@angular/core';

// SERVICES
import { EmployeeService } from '../../services/employee/employee.service';

@Component({
	moduleId: module.id,
	selector: 'resume',
	templateUrl: 'resume.component.html',
	providers: [EmployeeService]
})

export class ResumeComponent {

	public firstName: string = "John";
	public middleName: string = "Walter";
	public lastName: string = "Doe";
	public title: string = "Default Data Manager";

	constructor(private employeeService: EmployeeService){

		this.employeeService.getEmployee().subscribe(employee =>{
			this.firstName = employee[0].firstName;
			this.middleName = employee[0].middleName;
			this.lastName = employee[0].lastName;
			this.title = employee[0].title;
		});
	}
}
