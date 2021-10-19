import { Component, OnInit } from '@angular/core';
import {IngredientService} from "../../../services/ingredient.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {IngredientModule} from "../../../models/ingredient/ingredient.module";

@Component({
  selector: 'app-create-ingredient',
  templateUrl: './create-ingredient.component.html',
  styleUrls: ['./create-ingredient.component.scss']
})
export class CreateIngredientComponent implements OnInit {

  ingredientForm: FormGroup;
  ingredient: IngredientModule;
  constructor( public ingredientService: IngredientService ,private router: Router) { }

  ngOnInit() {
    this.init();
  }
  init(){
    this.ingredientForm = new FormGroup({
      nom: new FormControl('')
    });
  }
  onSubmit() {
    this.ingredient = new IngredientModule();
    this.ingredient.nom = this.ingredientForm.get('nom')?.value;
    this.ingredientService.addIngredient(this.ingredient).subscribe(
      (response) => {
        console.log('Ingredient created!');
        this.router.navigate(['/list-ingredient']);
      },
      (error) => {
        console.log('Error ! : ' + error);
      });
  }
}
