import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// GLOBAL
import { Http404Component }  from './components/http404/http404.component';

// PUBLIC
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';

// PRIVATE
import { MngmntComponent } from './components/mngmnt/mngmnt.component';
import { MngmntResumeComponent } from './components/mngmnt.resume/mngmntresume.component';


const appRoutes: Routes = [
	{
		path:'',
		component: HomeComponent
	},
	{
		path:'resume',
		component: ResumeComponent
	},
	{
		path:'mngmnt',
		component: MngmntComponent
	},
	{
		path:'mngmnt-resume',
		component: MngmntResumeComponent
	},
	{
		path: '404', 
		component: Http404Component
	},
	{
		path: '**', 
		redirectTo: '404'
	}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);