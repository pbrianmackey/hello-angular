import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BindingComponent } from './binding.component';
import { FormsModule } from '@angular/forms';

describe('BindingComponent', () => {
  let component: BindingComponent;
  let fixture: ComponentFixture<BindingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ BindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
