import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListIngredientComponent} from "./components/ingredient/list-ingredient/list-ingredient.component";
import {RecetteService} from "./services/recette.service";
import {ListRecetteComponent} from "./components/recette/list-recette/list-recette.component";
import {CreateIngredientComponent} from "./components/ingredient/create-ingredient/create-ingredient.component";
import {UpdateIngredientComponent} from "./components/ingredient/update-ingredient/update-ingredient.component";
import {CreateRecetteComponent} from "./components/recette/create-recette/create-recette.component";
import {UpdateRecetteComponent} from "./components/recette/update-recette/update-recette.component";

const routes: Routes = [
  { path: 'list-ingredient', component: ListIngredientComponent},
  { path: 'create-ingredient', component: CreateIngredientComponent},
  { path: 'update-ingredient/:id', component: UpdateIngredientComponent},

  { path: 'list-recette', component: ListRecetteComponent},
  { path: 'create-recette', component: CreateRecetteComponent},
  { path: 'update-recette/:id', component: UpdateRecetteComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
