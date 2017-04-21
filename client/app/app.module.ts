import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { MaterialModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';

// ANGULAR 2 GOOGLE MAPS : import { AgmCoreModule } from 'angular2-google-maps'; 

// 404
import { Http404Component }  from './components/http404/http404.component';

// NAVIGATION
import { NavMngmntComponent }  from './components/_partials/nav.mngmnt/navmngmnt.component';
import { NavUserComponent }  from './components/_partials/nav.user/navuser.component';
import { NavResumeComponent }  from './components/_partials/nav.resume/navresume.component';

// GLOBAL
import { ProjectsComponent }  from './components/_partials/global.projects/projects.component';
import { MapComponent } from './components/_partials/global.map/map.component';

// DIALOGS
import { ResumeAccessComponent }  from './components/_partials/dialog.resumeaccess/resumeaccess.component';

// HOME
import { HomeComponent }  from './components/home/home.component';
import { EmployerComponent }  from './components/_partials/home.employer/employer.component';
import { FooterComponent }  from './components/_partials/home.footer/footer.component';
import { GithubComponent }  from './components/_partials/home.github/github.component';
import { SplashheadComponent }  from './components/_partials/home.splashhead/splashhead.component';
import { StacklogosComponent }  from './components/_partials/home.stacklogos/stacklogos.component';

// RESUME
import { ResumeComponent }  from './components/resume/resume.component';
import { ExperienceComponent }  from './components/_partials/resume.experience/experience.component';
import { CardBackendComponent }  from './components/_partials/resume.card.backend/backend.component';
import { CardDesignComponent }  from './components/_partials/resume.card.design/design.component';
import { CardFrontendComponent }  from './components/_partials/resume.card.frontend/frontend.component';
import { CardMobileuxComponent }  from './components/_partials/resume.card.mobileux/mobileux.component';
import { CardOverviewComponent }  from './components/_partials/resume.card.overview/overview.component';
import { CardSysadminComponent }  from './components/_partials/resume.card.sysadmin/sysadmin.component';
import { CardWebdevComponent }  from './components/_partials/resume.card.webdev/webdev.component';

import { CardQualifyComponent }  from './components/_partials/resume.card.qualify/qualify.component';
import { CardCollegeComponent }  from './components/_partials/resume.card.college/college.component';
import { CardOnjobComponent }  from './components/_partials/resume.card.onjob/onjob.component';
import { CardOnlineComponent }  from './components/_partials/resume.card.online/online.component';
import { CardSelfComponent }  from './components/_partials/resume.card.self/self.component';

import { ContactTabComponent } from './components/_partials/resume.contact/contact.component';

// MANGEMENT ('MNGMNT')
import { MngmntComponent }  from './components/mngmnt/mngmnt.component';


// MANGEMENT/RESUME ('MNGMNT')
import { MngmntResumeComponent }  from './components/mngmnt.resume/mngmntresume.component';
import { ProfileFormComponent } from './components/_partials/mngmnt.profile/profile-form.component';
import { QualificationsComponent } from './components/_partials/mngmnt.qualifications/qualifications.component';

// AUTH
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { Auth } from './services/auth0/auth.service';

// ROUTING
import { Routing } from './app.routing';

@NgModule({
imports: [ 
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule, 
	HttpModule,
	Routing,
	MaterialModule.forRoot(),
	//AgmCoreModule.forRoot({apiKey: 'AIzaSyCMDP5ndv5symT_VO93KBVUEnBMYtLhdIE'}),
	ChartsModule
],
declarations: [ 
	AppComponent,

	Http404Component,

	ProjectsComponent,
	MapComponent,

	NavMngmntComponent,
	NavUserComponent,
	NavResumeComponent,
	
	ResumeAccessComponent,
	
	HomeComponent,
	GithubComponent,
	EmployerComponent,
	FooterComponent,
	SplashheadComponent,
	StacklogosComponent,

	ResumeComponent,
	ExperienceComponent,
	CardBackendComponent,
	CardDesignComponent,
	CardFrontendComponent,
	CardMobileuxComponent,
	CardOverviewComponent,
	CardSysadminComponent,
	CardWebdevComponent,
	CardQualifyComponent,
	CardCollegeComponent,
	CardOnjobComponent,
	CardOnlineComponent,
	CardSelfComponent,
	ContactTabComponent,
	
	MngmntComponent,

	MngmntResumeComponent,
	//ExperienceComponent,
	ProfileFormComponent,
	QualificationsComponent

],
bootstrap: [ AppComponent ],
providers: [ AUTH_PROVIDERS, Auth]
})

export class AppModule { }