import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
	selector: 'wmap',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent{
	@Output() map_clicked : EventEmitter<any> = new EventEmitter();
	@Input() markers:any=[];
	@Input() select = false;
	@Input() lat: number;
	@Input() lng: number;
	zoom: number = 13;
	minZoom: number = 2;
	public default_lat: number = 51.673858;
	public default_lng: number = 7.815982;
	clickMap(coords){
		this.lat = coords.lat;
		this.lng = coords.lng;
		this.map_clicked.emit(coords);
	}
	countryRestriction = {
		latLngBounds: {
			north: 85,
			south: -85,
			west: -179.99,
			east: 179.99,
		},
		strictBounds: true
	};
	constructor() {
		navigator.geolocation.getCurrentPosition((success)=>{
			this.default_lat = success.coords.latitude;
			this.default_lng = success.coords.longitude;
		});
	}
}
