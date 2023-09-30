import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiData, IPokemon } from '../interfaces/pokemon.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//! INYECCIÓN DE DEPENDENCIAS ===> PATRÓN DE DISEÑO EN EL CUAL YO NO CREO NADA, USO LO QUE YA ESTÁ CREADO
@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }


  getPeople(): Observable<IPokemon[]> {
    return this.http.get<IApiData>('https://pokeapi.co/api/v2/pokemon')
                    .pipe( 
                      map( dataApi => dataApi.results )
                     )
  }

}
