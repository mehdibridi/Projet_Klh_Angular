import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IngredientModule} from "../ingredient/ingredient.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RecetteModule {
  constructor() {
  }
  id: number;
  titre: string;
  sous_titre: string;
  ingredients: IngredientModule[]= [];
}
