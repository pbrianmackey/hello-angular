import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mackey-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit, OnDestroy {
  heroes: any;
  heroesServiceSubscriber: Subscription;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroesServiceSubscriber = this.heroesService.getAll().subscribe(result => {
      this.heroes = result;
    });
  }

  ngOnDestroy() {
    this.heroesServiceSubscriber.unsubscribe();
  }
}
