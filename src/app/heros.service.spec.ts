import { TestBed, getTestBed } from '@angular/core/testing';

import { HerosService } from './heros.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HerosService', () => {
  let injector: TestBed;
  let service: HerosService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HerosService]});
    injector = getTestBed();
    service = injector.get(HerosService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
