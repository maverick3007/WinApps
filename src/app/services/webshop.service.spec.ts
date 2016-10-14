/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WebshopService } from './webshop.service';

describe('Service: Webshop', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebshopService]
    });
  });

  it('should ...', inject([WebshopService], (service: WebshopService) => {
    expect(service).toBeTruthy();
  }));
});
