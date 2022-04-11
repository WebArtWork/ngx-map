# ngx-map

## In termianl /your_project/client install agm:
```
npm i --save @agm/core@1.1.0
```
## In termianl /your_project/client install map module:
```
waw add ngx-map
```
## In your_project/client/src/environments/enviroment.ts and environment.prod.ts
in const environment={
create property : " use your google map key " }

```
google_maps:
```
```
your_property: 'your_google_map_key'
```
## In your_project/client/src/app/modules/map/map.module.ts
replace property google_maps on your your_property

```
@NgModule({
	imports: [
		AgmCoreModule.forRoot({
			apiKey: environment.google_maps
		  }),
	],
  ```
  ```
@NgModule({
	imports: [
		AgmCoreModule.forRoot({
			apiKey: environment.your_property
		  }),
	],
  ```

## In your_project/client/src/app/modules/map/map.component.scss
use your scss property ^_^
```
agm-map{
}
```
## Your_page.module.ts
import map module to your page
```
import { MapModule } from 'src/app/modules';
@NgModule({
	imports: [
		MapModule
	],
})
```
## Your_page.component.html
for use this module use tag ```<wmap></wmap> ```
```
<wmap [markers]="[{lat: 50, lng: 50}]"></wmap>
```
