import { Component } from '@angular/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { BorderDirective } from './border.directive';

@Component({
  template: '<div mackeyBorder>I am glob!</div>'
})
class TestComponent {
  constructor() { }
}

describe('BorderDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        BorderDirective
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  }));

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have a border', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const div: HTMLElement = debugEl.querySelector('div');
    
    expect(div.style.border).toBe('1px solid black');
  });
});
