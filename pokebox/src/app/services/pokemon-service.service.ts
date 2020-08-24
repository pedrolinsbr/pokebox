import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  private url= "http://localhost:3000/api/"
  
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:3000/api/";
  }

  //#dePara.buscar
  //getPokemons(pokemons) { return this.http.post<any>(this.url + "pokemons", pokemons) };

  // Obtem todos os carros
  getPokemons(){
    return this.http.get(this.url + "pokemons");
  }

}
