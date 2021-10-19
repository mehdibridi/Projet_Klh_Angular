/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecetteService } from './recette.service';

describe('RecetteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecetteService]
    });
  });

  it('should ...', inject([RecetteService], (service: RecetteService) => {
    expect(service).toBeTruthy();
  }));
});
