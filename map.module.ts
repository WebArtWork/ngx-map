import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { MapComponent } from './map.component';
import { WacomModule } from 'wacom';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		WacomModule,
		AgmCoreModule.forRoot({
			apiKey: environment.google_maps
		  }),
	],
	declarations: [
		MapComponent
	],
	exports: [
		MapComponent
	],
	providers: []

})

export class MapModule { }
