import { Component, Input } from '@angular/core';
@Component({
	selector: 'wmap',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent{
	@Input() markers:any=[]
	
	constructor( ) {
	}
}
