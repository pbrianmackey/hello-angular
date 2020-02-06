import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Hero, HeroResolved } from '../models/Hero.interface';
import { Observable, of } from 'rxjs';
import { HeroesService } from '../heroes.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroAllResolver implements Resolve<Hero[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero[]> {
    return this.heroesService.getAll();
  }

  constructor(private heroesService: HeroesService) { }
}
