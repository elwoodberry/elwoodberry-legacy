import { Component } from '@angular/core';
import { ProfileMdl } from './profile-mdl';

import { EmployeeService } from '../../../services/employee/employee.service';

@Component({
  moduleId: module.id,
  selector: 'profile-form',
  templateUrl: './profile-form.component.html',
  providers: [EmployeeService]
})

export class ProfileFormComponent {
	
	powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

	model = new ProfileMdl(
		0,
		'firstName',
		'middleName',
		'lastName',
		'title',
		'email',
		'summary',
		'objective',
		'citizenship',
		'language',
		'location',
		'period',
		'phone',
		'website',
		this.powers[1], 
		'Boss'
	);

	submitted = false;

	onSubmit() { this.submitted = true; }
  
}