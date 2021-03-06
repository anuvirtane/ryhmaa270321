import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './events/events.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Forecast5daysComponent } from './weather/forecast5days/forecast5days.component';
import { PlacesComponent } from './places/places.component';
import { ActivitiesComponent } from './activities/activities.component';
import { StartPageComponent } from './start-page/start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    EventsComponent,
    Forecast5daysComponent,
    PlacesComponent,
    ActivitiesComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
