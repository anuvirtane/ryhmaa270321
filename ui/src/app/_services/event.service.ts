import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  proxyUrl: string = 'https://args-proxy.herokuapp.com';
  apiBaseUrl: string = '/http://open-api.myhelsinki.fi/';

constructor(private http: HttpClient) { }



getEvents() {
  return this.http.get(this.proxyUrl+ this.apiBaseUrl+'v1/events/?language_filter=fi&limit=10');


}

}
