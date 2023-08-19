import { TestBed } from '@angular/core/testing';

import { PokemonApiManegerService } from './pokemon-api-maneger.service';

describe('PokemonApiManegerService', () => {
  let service: PokemonApiManegerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonApiManegerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
