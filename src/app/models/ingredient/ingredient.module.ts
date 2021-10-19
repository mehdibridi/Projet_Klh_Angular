import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecetteModule} from "../recette/recette.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class IngredientModule {
  constructor() {}
  id: number;
  nom: string;
  recettes: RecetteModule[]= [];
}
