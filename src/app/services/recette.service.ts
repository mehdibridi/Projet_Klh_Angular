import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {RecetteModule} from "../models/recette/recette.module";
import {environment} from "../../environments/environment";

@Injectable()
export class RecetteService {
  url = environment.url;

  constructor(private http: HttpClient) { }

  addRecette(recette: RecetteModule){
    return this.http.post<RecetteModule>(this.url+ 'recettes', recette).subscribe(
      (data)  => {
        console.log(data);
      },
      error  => {
        console.log('Error ', error);
      }
    );
  }
  Update(recette: RecetteModule): Observable<RecetteModule> {
    return this.http.put<RecetteModule>(this.url+ 'recettes/' + recette.id, recette);
  }
  findId(id: number): Observable<RecetteModule> {
    return this.http.get<RecetteModule>(this.url + 'recette/' + id);
  }
  getRecette(): Observable<RecetteModule[]> {
    return this.http.get<RecetteModule[]>(this.url+ 'recettes');
  }

  delete(recette: RecetteModule) {
    return  this.http.delete(this.url+ 'recettes/' + recette.id) .subscribe(
      ()  => {
        console.log('Delete ');
      },
      error  => {
        console.log('Error ', error);
      }
    );

  }
}
