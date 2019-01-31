import { PageResponse } from './model/page-response';
import { WeatherModel } from './model/weather';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestService {

  api = "/api/weather/"

  constructor(private http: HttpClient) { }

  search(name : string) {
    return this.http.get<WeatherModel>(this.api + "search?name=" + name);
  }

  showHistory(name : string, page : number) {
    return this.http.get<PageResponse>(this.api + "history?name=" + name + "&size=5&page=" + page);
  }

  deleteHistory(id : number) {
    return this.http.delete(this.api + "?id=" + id);
  }

}
