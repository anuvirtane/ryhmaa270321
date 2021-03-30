import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  proxyUrl: string = environment.proxyUrl;
  apiBaseUrl: string = '/http://open-api.myhelsinki.fi/';

constructor( private http: HttpClient) { }


getActivities() {
  return this.http.get(this.proxyUrl+ this.apiBaseUrl+'v1/activities/?language_filter=fi&limit=10');


}


// getWeatherData() {
//   return new Observable((observer) => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         observer.next(position) // palauttaa käyttäjän koordinaatit
//       },
//         (error) => {
//         observer.next(error)
//       }
//     )
//   }).pipe( // konfiguroidaan data, mitä palautetaan, eli liitetään mukaan query parametrit
//     map((value:any) => {
//       return new HttpParams()
//         .set('lon', value.coords.longitude)
//         .set('lat', value.coords.latitude)
//         .set('units', 'metric')
//         .set('appid', this.apiKey)
//     }),
//     switchMap((values) => { // switchMapilla haetaan data ja välitetään se http get metodille
//       return this.http.get(this.baseUrl + 'forecast', { params: values })
//     })
//   )
// }

}
