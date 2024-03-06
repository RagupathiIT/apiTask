import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  getWeather(weatherLocation: string) {
    throw new Error('Method not implemented.');
  }
  private apiKey = 'd1273ab1dcb64cf5b2763335242002';
  // apiURL = 'http://api.weatherapi.com/v1/current.json?key=d1273ab1dcb64cf5b2763335242002&q=India&aqi=no'
  constructor(private http: HttpClient) { }

  getCurrentWeather(weatherLocation: string): Observable<any> {
    const url = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${weatherLocation}&aqi=no`;
    return this.http.get<any>(url);
  }
}
