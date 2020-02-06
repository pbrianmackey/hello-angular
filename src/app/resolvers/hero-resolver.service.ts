import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Hero, HeroResolved } from '../models/Hero.interface';
import { Observable, of } from 'rxjs';
import { HeroesService } from '../heroes.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroResolver implements Resolve<HeroResolved> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HeroResolved> {
    const id = route.paramMap.get("id");
    if(isNaN) {
      const message = `Bad Hero Id: ${id}`;
      console.error(message);
      return of({hero: null, error: message});
    }
    return this.heroesService.get(+id)
            .pipe(
              map(hero => ({hero})),
              catchError(error => {
                const message = `Error retrieving data ${error}`
                console.error(message);
                return of({hero: null, error: message});
              })
            );
  }

  constructor(private heroesService: HeroesService) { }
}
