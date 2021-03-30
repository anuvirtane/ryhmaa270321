import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  proxyUrl: string = environment.proxyUrl;
  apiBaseUrl: string =  "/http://open-api.myhelsinki.fi/v1/places/";


constructor(private http: HttpClient) { }

getPlaceData() {
  return new Observable((observer) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        observer.next(position) // palauttaa käyttäjän koordinaatit
      },
        (error) => {
        observer.next(error)
      }
    )
  }).pipe( // konfiguroidaan data, mitä palautetaan, eli liitetään mukaan query parametrit
    map((value:any) => {
      //kun api haluaa useamman arvon, ne pitää antaa httpParamsiin arrayna
      let parameters = [value.coords.latitude, value.coords.longitude, '0.2 '];
      return new HttpParams()
      //join tekee arraysta stringin, jossa arrayn alkioiden välissä on pilkku ja väli
        .append('distance_filter', parameters.join(', '));

       //toi vika on range!

    }),
    switchMap((values) => { // switchMapilla haetaan data (eikä observable :)) ja välitetään se http get metodille2


      return this.http.get(this.proxyUrl+this.apiBaseUrl,  { params: values });


    })
  )

}

}
