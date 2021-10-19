import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RecetteService} from "../../../services/recette.service";
import {RecetteModule} from "../../../models/recette/recette.module";
import {IngredientModule} from "../../../models/ingredient/ingredient.module";

@Component({
  selector: 'app-list-recette',
  templateUrl: './list-recette.component.html',
  styleUrls: ['./list-recette.component.scss']
})
export class ListRecetteComponent implements OnInit {

  recettes :RecetteModule[] = [];
  constructor( public recetteService: RecetteService ,private router: Router) { }

  ngOnInit() {
    this.getAll();

  }
  getAll(){
    this.recetteService.getRecette().subscribe(
      (data: RecetteModule[]) => {
        this.recettes = data;
        console.log( this.recettes);
      }
    );
  }

  onEdit(recette: RecetteModule){
    this.router.navigateByUrl('/update-recette/' + recette.id);

  }
  onDelete(recette: RecetteModule){
    if (confirm('Confirmez la suppression ?')) {
      this.recetteService.delete(recette);
    }

  }
}
