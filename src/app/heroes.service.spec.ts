import { TestBed, getTestBed } from '@angular/core/testing';

import { HeroesService } from './heroes.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HerosService', () => {
  let injector: TestBed;
  let service: HeroesService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroesService]});
    injector = getTestBed();
    service = injector.get(HeroesService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
