import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  //https://api.openweathermap.org/data/2.5/weather?q=jerusalem&appid=531aceebe209a418304c7a8a53e7c378&units=imperial
}
