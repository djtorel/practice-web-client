import { TestBed, inject } from '@angular/core/testing';

import { AddUserFormService } from './add-user-form.service';

describe('AddUserFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddUserFormService]
    });
  });

  it('should be created', inject([AddUserFormService], (service: AddUserFormService) => {
    expect(service).toBeTruthy();
  }));
});
