import { TestBed } from '@angular/core/testing';

import { DateManageService } from './date-manage.service';

describe('DateManageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateManageService = TestBed.get(DateManageService);
    expect(service).toBeTruthy();
  });
});
