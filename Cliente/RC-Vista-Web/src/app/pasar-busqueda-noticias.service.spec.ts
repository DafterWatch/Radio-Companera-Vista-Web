import { TestBed } from '@angular/core/testing';

import { PasarBusquedaNoticiasService } from './pasar-busqueda-noticias.service';

describe('PasarBusquedaNoticiasService', () => {
  let service: PasarBusquedaNoticiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasarBusquedaNoticiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
