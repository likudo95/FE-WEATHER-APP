import { PageResponse } from './../model/page-response';
import { WeatherModel } from './../model/weather';
import { RestService } from './../rest.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private rest : RestService) { }
  cityName : string;
  weather : WeatherModel;
  histories : Array<WeatherModel>;
  currentPage : number;
  ngOnInit() {
    this.cityName = '';
    this.currentPage = 0;
  }

  onClick() {
    this.histories = new Array;
    this.currentPage = 0;
    this.weather = null;
    this.rest.search(this.cityName).subscribe((data : WeatherModel) =>{
      this.weather = data;
    })
  }
  
  calculateIconUrl(icon : String) {
    return "http://openweathermap.org/img/w/"+ icon + ".png"
  }

  showHistory() {
    this.rest.showHistory(this.cityName, this.currentPage).subscribe((response : PageResponse) => {
      this.histories = this.histories.concat(response.content);
      this.currentPage++;
    }) 
  }

  delete(index : number) {
    var model = this.histories[index];
    this.rest.deleteHistory(model.id).subscribe(res => {
      this.histories.splice(index, 1);
    })
  }



}
