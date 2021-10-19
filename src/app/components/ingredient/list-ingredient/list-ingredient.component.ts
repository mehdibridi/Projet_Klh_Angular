import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IngredientService} from "../../../services/ingredient.service";
import {FormGroup} from "@angular/forms";
import {IngredientModule} from "../../../models/ingredient/ingredient.module";

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.scss']
})
export class ListIngredientComponent implements OnInit {

  ingredients : IngredientModule[] = [];
  constructor( public ingredientService: IngredientService ,private router: Router) { }

  ngOnInit() {
    this.getAll();
    console.log( this.ingredients);

  }
 getAll(){
    this.ingredientService.getIngredient().subscribe(
     (data: IngredientModule[]) => {
       this.ingredients = data;
     }
   );
  }
  onEdit(ingredient: IngredientModule){
    this.router.navigateByUrl('/update-ingredient/' + ingredient.id);

  }
  onDelete(ingredient: IngredientModule){
    if (confirm('Confirmez la suppression ?')) {
      this.ingredientService.delete(ingredient).subscribe(
        ()  => {
          console.log('Delete ');

        },
        error  => {
          console.log('Error ', error);
        }
      );
    }

  }
}
