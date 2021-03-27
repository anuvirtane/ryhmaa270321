import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/_services/weather.service';
import { Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-forecast5days',
  templateUrl: './forecast5days.component.html',
  styleUrls: ['./forecast5days.component.css']
})
export class Forecast5daysComponent implements OnInit, OnDestroy {
  forecastSub = new Subscription;
  weatherData: any = [];
  primaryDisplay = true;
  secondaryDisplay = false;
  forecastDetails: any;
  selectedIndex: number;

  constructor(private weatherService: WeatherService) { }

  ngOnDestroy(): void {
    this.forecastSub.unsubscribe();
  }

  ngOnInit(): void {
    this.forecastSub = this.weatherService.getWeatherData().pipe(
      pluck('list')
    )
      .subscribe(data => {
        this.futureForecast(data);
    })
  }

  futureForecast(data:any) {
    for (let i = 0; i < data.length; i = i + 8) {
      this.weatherData.push(data[i]);
    }
  }

  toggle(data: any, index: number) {
    this.primaryDisplay = !this.primaryDisplay;
    this.secondaryDisplay = !this.secondaryDisplay;

    this.forecastDetails = data;
    this.selectedIndex = index;
  }

  showDetails(data:any, i:number) {
    this.forecastDetails = data;
    this.selectedIndex = i;
  }

}
