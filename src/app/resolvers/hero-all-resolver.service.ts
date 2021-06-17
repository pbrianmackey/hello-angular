import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Hero, HeroResolved } from '../models/Hero.interface';
import { Observable, of } from 'rxjs';
import { HeroesService } from '../heroes.service';
import { map, catchError } from 'rxjs/operators';

/*
* Route Paramters can be used when there is a small amount of data (Think an ID)
* Prefectching Data:  Route resolvers allow us to download the data for a component before loading the component.
* When a data retrieval error occurs you can prevent navigation to the page
*/
@Injectable({
  providedIn: 'root'
})
export class HeroAllResolver implements Resolve<Hero[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero[]> {
    return this.heroesService.getAll();
  }

  constructor(private heroesService: HeroesService) { }
}
