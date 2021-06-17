import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'mackey-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  hero: any;
  heroesServiceSubscriber: Subscription;

  constructor(private heroesService: HeroesService,
              private route: ActivatedRoute
    ) { }
  
  ngOnInit(): void {
    const heroId = +this.route.snapshot.paramMap.get('id');
    this.heroesServiceSubscriber = this.heroesService.get(heroId).subscribe(result => {
      this.hero = result;
    });
  }

  ngOnDestroy() {
    this.heroesServiceSubscriber.unsubscribe();
  }
}
