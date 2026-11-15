import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-app',
  imports: [FormsModule],
  templateUrl: './weather-app.html',
  styleUrl: './weather-app.css',
})
export class WeatherAppComponent implements OnInit {
  cityName = 'Pune';
  weatherData: any;
  iconUrl = '';
  currentDate = '';
  loading = false;
  error = '';

  private url = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.loading = true;
    this.error = '';
    const fullUrl = `${this.url}?q=${this.cityName}&appid=${this.apiKey}&units=metric`;

    this.http.get(fullUrl).subscribe({
      next: (data: any) => {
        this.weatherData = data;
        this.iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        this.currentDate = new Date().toLocaleString();
        this.loading = false;
      },
      error: (err) => {
        this.weatherData = null;
        this.error = 'City not found. Please try again.';
        this.loading = false;
        console.error('Error fetching weather data:', err);
      },
    });
  }
}
