import { TestBed } from '@angular/core/testing';

import { PasarDatosSwitchService } from './pasar-datos-switch.service';

describe('PasarDatosSwitchService', () => {
  let service: PasarDatosSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasarDatosSwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
