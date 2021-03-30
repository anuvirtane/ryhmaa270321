import { compileComponentFromMetadata } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from '../_services/weather.service';

import { WeatherComponent } from './weather.component';

let comp;
let weatherService;


class MockWeatherService {


 weatherData = {city: {id: 658225, name: "Helsinki", coord: {}, country: "FI", population: 0},
 cnt: 40,
 cod: "200",
 list: [],
 message: 0
}}

beforeEach(() => {
  TestBed.configureTestingModule({
    // provide the component-under-test and dependent service
    providers: [
      WeatherComponent,
      { provide: WeatherService, useClass: MockWeatherService }
    ]
  });
  // inject both the component and the dependent service.
    comp = TestBed.inject(WeatherComponent);
    weatherService = TestBed.inject(WeatherService);
});

it('should not have weatherData after construction', () => {
  expect(comp.weatherNow).toBeUndefined();
});

it('should have weatherData after Angular calls ngOnInit', () => {
  comp.ngOnInit();
  expect(comp.weatherNow).toBeNull(); //voi olla, et tää ei kelpaa
});

// it('should ask user to log in if not logged in after ngOnInit', () => {
//   userService.isLoggedIn = false;
//   comp.ngOnInit();
//   expect(comp.welcome).not.toContain(userService.user.name);
//   expect(comp.welcome).toContain('log in');
// });



















