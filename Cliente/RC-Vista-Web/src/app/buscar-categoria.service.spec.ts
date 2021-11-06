import { TestBed } from '@angular/core/testing';

import { BuscarCategoriaService } from './buscar-categoria.service';

describe('BuscarCategoriaService', () => {
  let service: BuscarCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
