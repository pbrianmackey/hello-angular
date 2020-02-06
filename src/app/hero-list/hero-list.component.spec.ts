import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { HeroListComponent } from './hero-list.component';
import { NO_ERRORS_SCHEMA, Input, Directive } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeroesService } from '../heroes.service';

@Directive({
  selector: '[improvingFeatureToggle]'
})
export class FeatureToggleDirectiveMock {
  @Input() improvingFeatureToggle: string;
  isEnabled() {
      return true;
  }
}

describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;
  let service: HeroesService;
  let injector: TestBed;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListComponent, FeatureToggleDirectiveMock ],
      imports: [HttpClientTestingModule],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [HeroesService]
    })
    .compileComponents();
    injector = getTestBed();
    service = injector.get(HeroesService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});