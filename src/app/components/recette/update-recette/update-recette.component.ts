import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RecetteModule} from "../../../models/recette/recette.module";
import {RecetteService} from "../../../services/recette.service";
import {IngredientService} from "../../../services/ingredient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IngredientModule} from "../../../models/ingredient/ingredient.module";
import {DualListComponent} from "angular-dual-listbox";

@Component({
  selector: 'app-update-recette',
  templateUrl: './update-recette.component.html',
  styleUrls: ['./update-recette.component.scss']
})
export class UpdateRecetteComponent implements OnInit {
  recetteForm =   new FormGroup({
    titre: new FormControl(''),
    sous_titre: new FormControl(''),
    ingredients : new FormControl( ''),

  });
  listIngredient: IngredientModule[] = [];

  recette: RecetteModule;

  constructor(public recetteService: RecetteService,public ingredientService: IngredientService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
        const id = params.get('id');
        this.recetteService.findId(Number(id)).subscribe(
          (data) => {
            this.recette = data;

            console.log(this.recette);
            this.ingredientService.getIngredient().subscribe(
              (data1: IngredientModule[]) => {
                this.listIngredient = data1;
                this.stations =  this.listIngredient;
                this.init();
              }
            );

          }
        );
      }
    );
  }
  init(){
    console.log(this.recette.sous_titre);
    this.recetteForm.patchValue({
      titre: this.recette.titre,
      sous_titre: this.recette.sous_titre,
      ingredients : this.listIngredient,
    });
    this.doReset();

  }
  onSubmit() {
    if (confirm('Confirmer la modification ? ')) {

      this.recette.titre = this.recetteForm.get('titre')?.value;
      this.recette.sous_titre = this.recetteForm.get('sous_titre')?.value;
      this.recetteService.Update(this.recette).subscribe(
        (data)=>{
          console.log(data);
          this.router.navigateByUrl('/list-recette');
        }
      );

    }
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
    console.log(this.sourceRecette);
  }
  doReset() {
    this.sourceRecette = JSON.parse(JSON.stringify(this.stations));

    this.confirmedRecette = new Array<any>();

    for ( let  ingredient  of  this.listIngredient  ){
      for ( let  ingredient1  of  this.recette.ingredients  ){
        if (ingredient1.id === ingredient.id){
          this.confirmedRecette.push(ingredient);
        }
      }
    }

    this.useRecette();
  }
}
