import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { StepsService } from './steps.service';

describe('StepsService', () => {
  let service: StepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(StepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
