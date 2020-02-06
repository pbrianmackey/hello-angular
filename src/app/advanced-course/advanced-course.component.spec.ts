import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedCourseComponent } from './advanced-course.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdvancedCourseComponent', () => {
  let component: AdvancedCourseComponent;
  let fixture: ComponentFixture<AdvancedCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ AdvancedCourseComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
