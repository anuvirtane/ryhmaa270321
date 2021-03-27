import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  centerInService:  google.maps.LatLngLiteral;

constructor(private http: HttpClient) { }

getCurrentLocation(){
  navigator.geolocation.getCurrentPosition((position) => {

    this.centerInService = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    }
  });

  console.log(this.centerInService);
}




}
