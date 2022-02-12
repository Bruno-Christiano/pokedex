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

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.showAllPokemons();
  }

  showAllPokemons() {
    this.pokemonService.getAllPokemons().subscribe((res) => {
      this.pokemons = res.results;
      console.log(this.pokemons);

      const p = this.pokemons.map((pokemon) => {
        pokemon.isChecked = false;
        return pokemon;
      });
    });
  }

  setCheckPokemon(id: any) {
    let dados = this.pokemons;
    if (dados[id].isChecked === false) {
      dados[id].isChecked = true;
    } else {
      dados[id].isChecked = false;
    }
  }

  onMouseOver(id: number) {
    let dados = this.pokemons;
    if (dados[id].isChecked === false) {
      this.iconFavHover = 'fa-regular fa-star';
      // dados[id].isChecked = true;
    } else {
      dados[id].isChecked = false;
    }
  }
}
