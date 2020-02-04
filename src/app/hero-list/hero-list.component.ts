import { Component, OnInit, OnDestroy } from '@angular/core';
import { HerosService } from '../heros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'improving-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit, OnDestroy {

  heroes: any;
  herosServiceSubscriber: Subscription;

  constructor(private herosService: HerosService) { }

  ngOnInit() {
    this.herosServiceSubscriber = this.herosService.getAll().subscribe(result => {
      this.heroes = result;
    });
  }

  ngOnDestroy() {
    this.herosServiceSubscriber.unsubscribe();
  }
}
