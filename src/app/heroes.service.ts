import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero } from './models/Hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  get(id: Number): Observable<Hero> {
    return this.http.get<Hero>(this.url + "/heroes" + "/" + id)
            .pipe(map(response => response));
  }

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url + "/heroes")
            .pipe(map(response => response));
  }
}
