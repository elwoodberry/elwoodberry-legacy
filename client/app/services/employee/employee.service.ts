import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class EmployeeService {
	
	constructor(private http: Http){
		// console.log('\nSERVICE:EMPLOYEE\n===========================\nEmployee Service initialized...');
	}

	getEmployee(){
		return this.http.get('api/employee.json')
			.map(res => res.json());
	}                   
}