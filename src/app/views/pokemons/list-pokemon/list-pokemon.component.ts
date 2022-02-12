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
  iconFavHover: string = 'fa-regular fa-star';
  pokemons: Pokemon[] = [];
  isFavorite: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.showAllPokemons();
  }

  showAllPokemons() {
    this.pokemonService.getAllPokemons().subscribe((res) => {
      this.pokemons = res.results;
      console.log(this.pokemons);

      const poke = this.pokemons.map((pokemon) => {
        pokemon.isFav = false;
        pokemon.isChecked = false;
        return pokemon;
      });
    });
  }

  setCheckPokemon(id: any) {
    let dados = this.pokemons;
    if (dados[id].isChecked === false) {
      dados[id].isChecked = true;
      dados[id].isFav = true;
    } else {
      dados[id].isChecked = false;
      dados[id].isFav = false;
    }
  }
}
