import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';



@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(
    private PokemonServiceService: PokemonServiceService
  ) { }

  ngOnInit(): void {
    let obj  = {}
    this.PokemonServiceService.getPokemons().subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log("Erro ", err);
      }
    );
  }

}

