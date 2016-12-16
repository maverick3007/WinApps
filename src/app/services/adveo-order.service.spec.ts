/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdveoOrderService } from './adveo-order.service';

describe('AdveoOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdveoOrderService]
    });
  });

  it('should ...', inject([AdveoOrderService], (service: AdveoOrderService) => {
    expect(service).toBeTruthy();
  }));
});
