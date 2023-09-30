import { Component,
  //  OnDestroy,
    OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IPokemon } from 'src/app/interfaces/pokemon.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit
// ,OnDestroy 
{

  pokemons: IPokemon[] = [];
  constructor( private _apiService: ApiService ){}

  // subscription$ = new Subscription();
  pokeObs$ = new Observable<IPokemon[]>();

  ngOnInit(){
    this.pokeObs$= this._apiService.getPeople()
    
    
    
    
    
    
    // .subscribe(res => {
    //   this.pokemons = res;
    // })
  }

  // ngOnDestroy(){
  //   this.subscription$.unsubscribe();
  // }

}
