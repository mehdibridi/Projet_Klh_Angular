import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RecetteModule} from "../../../models/recette/recette.module";
import {IngredientService} from "../../../services/ingredient.service";
import {Router} from "@angular/router";
import {RecetteService} from "../../../services/recette.service";
import {IngredientModule} from "../../../models/ingredient/ingredient.module";
import {DualListComponent} from "angular-dual-listbox";

@Component({
  selector: 'app-create-recette',
  templateUrl: './create-recette.component.html',
  styleUrls: ['./create-recette.component.scss']
})
export class CreateRecetteComponent implements OnInit {

  recetteForm =   new FormGroup({
  titre: new FormControl(''),
  sous_titre: new FormControl(''),
  ingredients : new FormControl( ''),

});
  recette: RecetteModule;
  listIngredient: IngredientModule[] = [];
  constructor( public recetteService: RecetteService,public ingredientService: IngredientService, private router: Router) { }

  ngOnInit() {
    this.ingredientService.getIngredient().subscribe(
      (data: IngredientModule[]) => {
        this.listIngredient = data;
        this.stations =data;
        this.init();
      }
    );
  }
  init(){
    this.recetteForm.patchValue({
      ingredients : new FormControl( this.listIngredient, Validators.required),

    });
    this.doReset();

  }
  onSubmit(){
    this.recette = new RecetteModule();
    this.recette.titre = this.recetteForm.get('titre')?.value;
    this.recette.sous_titre = this.recetteForm.get('sous_titre')?.value;
    this.recette.ingredients = this.confirmed;
    console.log(this.recette.ingredients);
    this.recetteService.addRecette(this.recette);
  }
  keepSorted = true;
  key: string;
  display: string;
  filter = false;
  source: Array<any>;
  confirmed: Array<any>;
  disabled = false;
  format: any = DualListComponent.DEFAULT_FORMAT;

  private sourceRecette: Array<any>;

  private confirmedRecette: Array<any>;


  private stations: Array<any> = [];



  private useRecette() {
    this.key = 'id';
    this.display = 'nom'; // [ 'station', 'state' ];
    this.keepSorted = true;
    this.source = this.sourceRecette;
    this.confirmed = this.confirmedRecette;
  }
  doReset() {
    this.sourceRecette = JSON.parse(JSON.stringify(this.stations));

    this.confirmedRecette = new Array<any>();

  //  this.confirmedRecette.push(this.stations[3]);

    this.useRecette();
  }
test(){
    console.log(this.source);
}


}
