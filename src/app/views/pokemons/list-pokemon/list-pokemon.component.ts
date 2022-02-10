import { KeyValuePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.showAllPokemons();
  }

  showAllPokemons() {
    this.pokemonService.getAllPokemons().subscribe((res) => {
      this.pokemons = res.results;
      console.log(res.results[0].type);
    });
  }
}
