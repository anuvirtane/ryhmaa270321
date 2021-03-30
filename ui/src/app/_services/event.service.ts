import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  proxyUrl: string = environment.proxyUrl;
  apiBaseUrl: string = '/http://open-api.myhelsinki.fi/';

constructor(private http: HttpClient) { }



getEvents() {
  return this.http.get(this.proxyUrl+ this.apiBaseUrl+'v1/events/?language_filter=fi&limit=10');


}

}
