import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url + "/heros" + "?_sort=id&order=desc")
            .pipe(map(response => response));
  }
}
