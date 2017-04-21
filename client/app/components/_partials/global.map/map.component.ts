import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'map',
	templateUrl: 'map.component.html'
})

export class MapComponent {
	public title: string = 'My first angular2-google-maps project';
	public lat: number = 39.995052;
	public lng: number = -82.810837;
	public zoom: number = 14;
}