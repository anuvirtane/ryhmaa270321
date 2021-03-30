import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl = environment.weatherApi;
  apiKey = environment.weatherApiKey;

  constructor(private http: HttpClient) { }

  getWeatherData() {
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
        return new HttpParams()
          .set('lon', value.coords.longitude)
          .set('lat', value.coords.latitude)
          .set('units', 'metric')
          .set('appid', this.apiKey)
      }),
      switchMap((values) => { // switchMapilla haetaan data ja välitetään se http get metodille
        console.log(this.baseUrl + 'forecast', { params: values });
        return this.http.get(this.baseUrl + 'forecast', { params: values })
        //https://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=7d3404f41e5b1053efc8acdd90d6ebd8
      })
    )
  }
}
