import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
	selector: 'wmap',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent{
	@Output() map_clicked : EventEmitter<any> = new EventEmitter();
		// output selected pin coords
		// output map clicked with coords
	@Input() markers:any=[];
	@Input() select = false;
	@Input() lat: number;
	@Input() lng: number;
	clickMap(coords){
		this.lat = coords.lat;
		this.lng = coords.lng;
		this.map_clicked.emit(coords);
	}
	constructor() {}
}
