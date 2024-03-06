import { Component } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';
import { debounceTime } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { WeatherData } from '../services/weather-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  weatherLocation: string='';
  weatherData: any;
  searchForm!: FormGroup;
  allData: any[] | undefined;
 

  constructor(private weatherService: WeatherServiceService) {}
  getWeather() {
    this.weatherService.getCurrentWeather(this.weatherLocation)
      .subscribe(data => {
        this.weatherData = data;
      });
  }

  


  // onSearchTextChange() {
  //   if (this.weatherLocation.length > 2) {
  //     const searchedLocation = this.allData?.filter(b => b.location.name.toLowerCase().contains(this.weatherLocation.toLowerCase()));
  //     console.log('searched Location', searchedLocation);
  //     this.allData = searchedLocation;
  //   }
  //   if (this.weatherLocation.length === 0) {
  //     this.allData = this.weatherData;
  //   }
  // }
  
}
