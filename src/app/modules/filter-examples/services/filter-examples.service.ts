import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilterExamplesService {


  API_URL = `${environment.API_URL}`;
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getMethod(): Observable<any> {
    const result = this.http.get<any>(this.API_URL);
    return result;
  }
}
