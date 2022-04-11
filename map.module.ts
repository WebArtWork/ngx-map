import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { MapComponent } from './map.component';

@NgModule({
	imports: [
		CoreModule,
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
