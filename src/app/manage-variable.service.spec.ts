import { TestBed } from '@angular/core/testing';

import { ManageVariableService } from './manage-variable.service';

describe('ManageVariableService', () => {
  let service: ManageVariableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageVariableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
