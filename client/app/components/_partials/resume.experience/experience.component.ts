import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'experience',
	templateUrl: 'experience.component.html'
})

export class ExperienceComponent  {

	public jobs: any[];

	constructor(){
		// console.log('ExperienceComponent');

		this.jobs = [
			// 00. Globecomm
			{ 
				companyName: 'Globecomm',
				startDate: '11/01/2013',
				endDate: '01/29/2017',
				duration: '3 years, 3 months',
				title: 'Senior UI/UX Software Engineer',
				location: 'Hauppauge, NY',
				url: 'http://www.globecommsystems.com/',
				image: '/img/employers/05-globecomm_color.png',
				industry: 'Telecom',

				summary: 'Worked closely with the development team, product management, and QA to design and develop the learning management platform, TEMPO (http://www.tempoeverywhere.com).',
				highlights: [
					{
						name: 'Tempo Platform v1.0',
						description: 'Tempo is a learning management system. I was tasked to overhaul the existing interface to be more user friendly and intuitive. Worked directly with JCPenney.'
					},
					{
						name: 'Field Caster (Tempo Platform v2.0)',
						description: 'Tempo’s platform has many components. The sales team decided to sell individual components of the application. “FieldCaster” is the event scheduling component of Tempo.'
					},
					{
						name: 'Independent Distance Learning (IDL, Tempo Platform v2.0)',
						description: 'Initially, Tempo was poorly built. In this effort we built the platform from scratch using new methods, libraries and frameworks.'
					}
				]
			},
			// 01. Ignite Technologies
			{
				companyName: 'Ignite Technologies',
				startDate: '8/01/2011',
				endDate: '07/01/2013',
				duration: '1 year, 11 months',
				title: 'Software Engineer',
				location: 'Frisco, TX',
				url: 'http://www.ignitetech.com/',
				image: '/img/employers/03-ignite-technologies_color.jpg',
				industry: 'Learning Management Systems (LMS)',
				summary: 'Brought aboard to lead the charge on upating UI for existing live streaming applications as well as new products.',
				highlights: [
					{
						name: 'McDonalds Learning Management System',
						description: 'A pure javascript LMS system. I was tasked to introduce jQuery to the application and add a slideshow presentation of all the new courses in the system.'
					},
					{
						name: 'McDonalds Equipment Ordering System',
						description: 'A system where franchise owners order and schedule equipment and services to stand up a new location. I was tasked with overhauling the look and feel of specific areas of the application.'
					},
					{
						name: 'IgniteLIVE live streaming platform',
						description: 'Built for Bank of America, this peer to peer streaming platform application was very similar to gotomeeting.com. I was tasked with designing and building the user interface and workflow.'
					}
				]
			},
			// 02. Media General, Dealtaker.com
			{ 
				companyName: 'Media General, Dealtaker.com',
				startDate: '08/01/2009',
				endDate: '06/01/2011',
				duration: '1 year, 10 months',
				title: 'Software Engineer, UI/UX',
				location: 'Plano, TX',
				url: 'https://www.dealtaker.com/',
				image: '/img/employers/02-media-general_color.png',
				industry: 'Online Coupons',
				summary: 'Worked with various teams (local and offshore) on the efforts to upgrade the look and feel of DealTaker.com.',
				highlights: [
					{
						name: 'NewAtNoon.com Daily Coupon Website',
						description: 'A coupon website that delivered a new coupon everyday at noon. I was tasked with designing and building the interface to the website.'
					},
					{
						name: 'Pricetaker.com Coupon Comparison Website',
						description: 'A coupon comparison website. I was tasked with designing and building the interface to the website. I was also tasked with designing the brand for this website.'
					},
					{
						name: 'Dealtaker.com Coupon Website',
						description: 'The main company website. The original owner built the site using a message board. Our team was tasked with rebuilding the site using an MVC framework. My task was to update, rebuild and redesign the website.'
					}
				]
			},
			// 03. StrongTech, Inc.
			{
				companyName: 'StrongTech, Inc.',
				startDate: '5/1/2007',
				endDate: '2/1/2009',
				duration: '1 year, 10 months',
				title: 'Multi Media Developer',
				location: 'Columbus, OH',
				url: 'https://www.strongtech.com/',
				image: '/img/employers/09-strongtech.png',
				industry: 'Asset Management',
				summary: 'Jack of all trades multi media developer. Tasked with various web related design and programming.',
				highlights: [
					{
						name: 'Company Website',
						description: 'Tasked with developing the company website in FLEX and later in SilverLight. HTML & CSS was the final choice.'
					},
					{
						name: 'Prototype Application Development',
						description: 'Developed prototypes for the company to pitch to venture capital firms.'
					}
				]
			},
			// 04. Columbus Dispatch Newspaper
			{ 
				companyName: 'Columbus Dispatch Newspaper',
				startDate: '12/01/2005',
				endDate: '5/01/2007',
				duration: '1 year, 5 months',
				title: 'Graphic Designer, Web Designer',
				location: 'Columbus, OH',
				url: 'http://www.dispatch.com/',
				image: '/img/employers/10-columbus-dispatch.png',
				industry: 'Newspaper',
				summary: 'Web advertisement layout and design, also assist in the design and implementation of various portions of the web site.',
				highlights: [
					{
						name: 'Web Advertisements on Dispatch.com',
						description: 'Worked directly with the digital sales team to design advertisements for the company website.'
					},
					{
						name: 'Annual Sections',
						description: 'Auto Show, Valentines Day, etc. of Dispatch.com I was tasked to update the stories and advertisements for the annual sections of the company website.'
					},
					{
						name: 'Co Branded Sections ',
						description: 'Real Estate and Medical Sections. The company had many small co-branded websites. I was tasked to update the stories and advertisements for these sites.'
					}
				]
			},
			// 05. Triple Crown Publications
			{
				companyName: 'Triple Crown Publications',
				startDate: '1/01/2002',
				endDate: '5/01/2005',
				duration: '3 years, 4 months',
				title: 'Creative Director',
				location: 'Columbus, OH',
				url: 'http://www.triplecrownpublications.com/',
				image: '',
				industry: 'Publishing',
				summary: 'Lead a team of designers, programmers and brand managers to help build a small company to a million dollar operation in less than 3 years.',
				highlights: [
					{
						name: 'TripleCrownPublications.com Company Website',
						description: 'Designed and developed the company’s website to allow them to sell books online.'
					},
					{
						name: 'Book Cover Catalog',
						description: 'The company has a catalog of over 50 books. I coordinated photo shoots, worked with the authors and designed the first 9 book covers.'
					},
					{
						name: 'Marketing Material',
						description: 'Coordinated photo shoots, worked with printers, worked with authors and designed all marketing material for the company.'
					}
				]
			},
			// 06. N. Wasserman & Co.
			{ 
				companyName: 'N. Wasserman & Co.',
				startDate: '3/01/2001',
				endDate: '4/01/2002',
				duration: '1 year, 1 month',
				title: 'Web Designer, Graphic Designer',
				location: 'Columbus, OH',
				url: 'http://postalstuff.com/',
				image: '',
				industry: 'Apparel Manufacturer',
				summary: 'Developed ecommerce website, highly effective advertisements, catalogs, fliers and faxes that increased company revenue.',
				highlights: [
					{
						name: 'Postalstuff.com Company Website',
						description: 'Designed and developed the company website. Site still used to this day.'
					}
				]
			},
			// 07. Sigmaflow
			{
				companyName: 'Sigmaflow',
				startDate: '06/01/2014',
				endDate: '01/01/2015',
				title: 'User Interface Design',
				location: 'Plano, TX',
				url: 'http://www.sigmaflow.com/',
				image: '/img/employers/11-sigmaflow.png',
				industry: 'Oil Drilling Management Software',
				summary: 'Tasked with overhauling the user interface of their existing management application.',
				highlights: [
					{
						name: 'Project Management Application',
						description: 'Worked with Project Manager to analyze, streamline and redesign the user experience workflow of the oil drilling project management application.'
					}
				]
			},
			// 08. Verizon
			{
				companyName: 'Verizon, FIOS',
				startDate: '10/01/2013',
				endDate: '11/01/2013',
				title: 'JavaScript Developer, UI/UX',
				location: 'Irving, TX',
				url: 'http://www.verizon.com/home/fiostv/',
				image: '/img/employers/12-verizon.png',
				industry: 'Cable Television',
				summary: 'Tasked with overhauling their cable box software user interface using dustJS.',
				highlights: [
					{
						name: 'FIOS Cable Box Software',
						description: 'Tasked with driving the UI of the cable box software based on the approved layouts from the designers using DustJS.'
					}
				]
			},
			// 09. ERC (Enterprise Risk Control)
			{ 
				companyName: 'ERC (Enterprise Risk Control)',
				startDate: '08/01/2013',
				endDate: '10/01/2013',
				title: 'User Interface Designer',
				location: 'Plano, TX',
				url: 'http://enterpriserc.wixsite.com/enterpriserc',
				image: '',
				industry: 'Risk Management and Background Screening',
				summary: 'Tasked with overhauling their management software.',
				highlights: [
					{
						name: 'Contractor Facing Management Software',
						description: 'Worked with CTO to analyze, streamline and redesign the user experience workflow of the contractor facing management application.'
					}
				]
			},
			// 10. Energy Management Systems
			{
				companyName: 'Energy Management Systems',
				startDate: '08/01/2010 ',
				endDate: '03/01/2011',
				title: 'Web Designer',
				location: 'Philadelphia, PA',
				url: 'http://ems3.com/',
				image: '',
				industry: 'Energy Metering Services',
				summary: 'Tasked with overhauling their company website.',
				highlights: [
					{
						name: 'Company Website',
						description: 'After set up, design and deployment the biggest concern of the company was the need to be able to edit the website on their own.  Used wordpress to accomplish this.'
					}
				]
			}
		];


	}

}