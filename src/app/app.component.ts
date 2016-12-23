import { Component, OnInit } from '@angular/core';
import { Restaurant } from './Restaurant';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  errorMessage: string;
  restaurants: Restaurant[];
  mode: 'Observable';

  constructor(private restaurantService: RestaurantService) {};

  ngOnInit() {

  }

  getRestaurants() {
    this.restaurantService.getRestaurants()
                          .subscribe(
                            restaurants => this.restaurants = restaurants,
                            error => this.errorMessage = <any>error);
  }

  submitVal(city_name:any) {
    console.log(city_name);
    // make http get request


    // store response

    // insert data set into d3 chart
  }
}