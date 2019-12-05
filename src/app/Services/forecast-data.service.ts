import { Injectable } from '@angular/core';
import MockData from "./mock.data.json";

@Injectable({
  providedIn: 'root'
})
export class ForecastDataService {

  constructor() { }

  getForecast( ) { return MockData; }
}
