import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IngredientService} from "../../../services/ingredient.service";
import {IngredientModule} from "../../../models/ingredient/ingredient.module";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-ingredient',
  templateUrl: './update-ingredient.component.html',
  styleUrls: ['./update-ingredient.component.scss']
})
export class UpdateIngredientComponent implements OnInit {
  ingredientform =  new FormGroup({
  nom: new FormControl('')
});

  ingredient: IngredientModule;
  constructor(public  ingredientService: IngredientService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
        const id = params.get('id');
        this.ingredientService.findId(Number(id)).subscribe(
          (data) => {
            this.ingredient = data;
            this.init();

          }
        );
      }
    );
  }
  init(){
   this.ingredientform.patchValue({
     nom: this.ingredient.nom
   });
  }

  onSubmit() {
    if (confirm('Confirmer la modification ? ')) {

      this.ingredient.nom = this.ingredientform.get('nom')?.value;
      this.ingredientService.Update(this.ingredient).subscribe(
        (data)=>{
          console.log(data);
          this.router.navigateByUrl('/list-ingredient');
        }
      );

    }
  }
}
