import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../_services/weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {
  timeline = [];
  weatherNow: any;
  currentTime = new Date();
  location: any;
  weatherSub = new Subscription;
  show5DayForecast: boolean = false;
  show3HourForecast: boolean = true;

  constructor(public weatherService: WeatherService) { }

  ngOnDestroy(): void {
    this.weatherSub.unsubscribe();
  }


  ngOnInit(): void {
    this.weatherSub = this.weatherService.getWeatherData().subscribe(data => {
      this.getTodayForecast(data);

    });

  }

  show5Days() {
    this.show5DayForecast = !this.show5DayForecast;
    this.show3HourForecast = !this.show3HourForecast;
  }

  dateRange() { // palauttaa kahden päivän välisen alueen (range), jonka ero on 3 tuntia
    const start = new Date();
    // start.setHours(start.getHours()+(start.getTimezoneOffset() / 60))
    const to = new Date(start);
    to.setHours(to.getHours() +2, to.getMinutes() + 59, to.getSeconds() + 59);

    return { start, to }
  }

  getTodayForecast(today: any) {
    this.location = today.city;

    for (const forecast of today.list.slice(0, 8)) { // looppaa listan läpi ja ottaa koko päivän tiedot (3 tunnin välein, 3*8 = 24 h)
      this.timeline.push({
        time: forecast.dt_txt,
        temp: forecast.main.temp,
        icon: forecast.weather[0].icon

      });

      const apiDate = new Date(forecast.dt_txt).getTime(); // apiDate:n tallennetaan päivät, jotka API meille antaa

      if (this.dateRange().start.getTime() <= apiDate && this.dateRange().to.getTime() >= apiDate) {
        this.weatherNow = forecast;
      }


    }
  }

}
