export class ProfileMdl {

	constructor(
		public id: number,
		public firstName: string,
		public middleName: string,
		public lastName: string,
		public title: string,
		public email: string,
		public summary: string,
		public objective: string,
		public citizenship: string,
		public language: string,
		public location: string,
		public period: string,
		public phone: string,
		public website: string,
		public power: string,
		public alterEgo?: string){

		console.log("Resume Model Class Has Loaded...");
	}
}