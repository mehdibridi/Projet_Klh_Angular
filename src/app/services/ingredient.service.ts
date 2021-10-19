import { Injectable } from '@angular/core';
import {IngredientModule} from "../models/ingredient/ingredient.module";
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable()
export class IngredientService {
  ingredients: IngredientModule[]= [];
  url = environment.url;

  constructor(private http: HttpClient) { }

  addIngredient(ingredient: IngredientModule): Observable<IngredientModule[]> {
    return this.http.post<IngredientModule[]>(this.url+ 'ingredients', ingredient);
  }

  getIngredient(): Observable<IngredientModule[]> {
    return this.http.get<IngredientModule[]>(this.url+ 'ingredients');
  }

  Update(ingredient: IngredientModule): Observable<IngredientModule> {
    return this.http.put<IngredientModule>(this.url+ 'ingredients/' + ingredient.id, ingredient);
  }
  findId(id: number): Observable<IngredientModule> {
    return this.http.get<IngredientModule>(this.url + 'ingredient/' + id);
  }
  delete(ingredient: IngredientModule) {
    return  this.http.delete(this.url+ 'ingredients/' + ingredient.id);

  }
}

