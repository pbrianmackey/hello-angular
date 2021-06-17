import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdvancedCourseComponent } from './advanced-course.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

export class ActivatedRouteMock {
  public route = {
    data: {
      heroList: []
    }
  };
}

describe('AdvancedCourseComponent', () => {
  let component: AdvancedCourseComponent;
  let fixture: ComponentFixture<AdvancedCourseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ AdvancedCourseComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMock 
        },
      ]
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
