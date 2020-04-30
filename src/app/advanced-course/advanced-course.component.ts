import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mackey-advanced-course',
  templateUrl: './advanced-course.component.html',
  styleUrls: ['./advanced-course.component.scss']
})
export class AdvancedCourseComponent {
  heroes$: Observable<any>;

  constructor(private route: ActivatedRoute) {
    this.heroes$ = this.route.data;
  }
}
