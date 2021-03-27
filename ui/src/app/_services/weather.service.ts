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
  weatherData: any;
  forecastData: any;

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
        return this.http.get(this.baseUrl + 'forecast', { params: values })
      })
    )
  }
}
