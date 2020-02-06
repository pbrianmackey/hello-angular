import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'improving-advanced-course',
  templateUrl: './advanced-course.component.html',
  styleUrls: ['./advanced-course.component.scss']
})
export class AdvancedCourseComponent implements OnInit {
  heroes$: Observable<any>;

  constructor(private heroesService: HeroesService) { 
    this.heroes$ = heroesService.getAll();
  }

  ngOnInit() {
  }

}
