import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularDualListBoxModule } from 'angular-dual-listbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ListIngredientComponent } from './components/ingredient/list-ingredient/list-ingredient.component';
import { CreateIngredientComponent } from './components/ingredient/create-ingredient/create-ingredient.component';
import { UpdateIngredientComponent } from './components/ingredient/update-ingredient/update-ingredient.component';
import { CreateRecetteComponent } from './components/recette/create-recette/create-recette.component';
import { UpdateRecetteComponent } from './components/recette/update-recette/update-recette.component';
import { ListRecetteComponent } from './components/recette/list-recette/list-recette.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IngredientService} from "./services/ingredient.service";
import {RecetteService} from "./services/recette.service";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MDBBootstrapModule} from "angular-bootstrap-md";

@NgModule({
  declarations: [
    AppComponent,
    ListIngredientComponent,
    CreateIngredientComponent,
    UpdateIngredientComponent,
    CreateRecetteComponent,
    UpdateRecetteComponent,
    ListRecetteComponent,
    NavBarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        ReactiveFormsModule,
        AngularDualListBoxModule,
        MDBBootstrapModule.forRoot(),

    ],
  providers: [
    IngredientService,
    RecetteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
