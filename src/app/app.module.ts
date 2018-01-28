import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  AgmCoreModule,
  GoogleMapsAPIWrapper
} from '@agm/core';

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfnrYNQtMC-PqTWvH9F36TehlAN6Zw3MM'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
