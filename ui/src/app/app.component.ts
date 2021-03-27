import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';
  show5DayForecast: boolean = false;
  show3HourForecast: boolean = false;

  show5Days() {
    this.show5DayForecast = !this.show5DayForecast;
  }

  show3Hours() {
    this.show3HourForecast = !this.show3HourForecast;
  }
}
