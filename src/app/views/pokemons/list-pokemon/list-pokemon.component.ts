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
  typesUnique: any = [];
  isFavorite: boolean = false;
  filterBy: string = '';
  filteredPokemons: Pokemon[] = [];
  default = 'normal';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.showAllPokemons();
  }

  showAllPokemons() {
    this.pokemonService.getAllPokemons().subscribe((res) => {
      const resultPokemonUnique = this.getPokemonUnique(res.results);
      this.pokemons = resultPokemonUnique;
      this.filteredPokemons = this.pokemons;

      resultPokemonUnique.forEach((poke: any) => {
        this.typesUnique.push(...poke.type);
      });
      const unique = [...new Set(this.typesUnique)];
      this.typesUnique = unique;
    });
  }

  setCheckPokemon(index: number) {
    let dados = this.filteredPokemons;
    if (dados[index].isChecked === false) {
      dados[index].isChecked = true;
      dados[index].isFav = true;
    } else {
      dados[index].isChecked = false;
      dados[index].isFav = false;
    }
  }

  getPokemonUnique(pokemons: Pokemon[]) {
    const resultPokemonUnique = pokemons.filter(
      (pokemon, index, self) =>
        index ===
        self.findIndex(
          (pokemonToFilter) =>
            pokemonToFilter.national_number === pokemon.national_number &&
            pokemonToFilter.name === pokemon.name
        )
    );

    resultPokemonUnique.map((pokemon: Pokemon) => {
      pokemon.isFav = false;
      pokemon.isChecked = false;
      return pokemon;
    });

    return resultPokemonUnique;
  }

  set filter(value: string) {
    this.filterBy = value;

    this.filteredPokemons = this.pokemons.filter(
      (pokemon) =>
        pokemon.name
          .toLocaleLowerCase()
          .indexOf(this.filterBy.toLocaleLowerCase()) > -1 ||
        pokemon.national_number.toLocaleLowerCase().indexOf(this.filterBy) > -1
    );
  }

  get filter() {
    return this.filterBy;
  }

  // FILTRAR POR TIPOS

  filterPokemonBytype(typeFilter: any) {
    const filteredPokemon: any = [];
    const filterPokemon = this.filteredPokemons;

    if (typeFilter !== '') {
      filterPokemon
        .map((poke) => {
          poke.isFav = false;
          return poke;
        })
        .forEach((pokeInfo) => {
          pokeInfo.type.forEach((type) => {
            if (type === typeFilter) {
              filteredPokemon.push(pokeInfo);
            } else {
              filterPokemon.map((poke) => {
                poke.isFav = false;
                return poke;
              });
              // this.filteredPokemons = filteredPokemon;
            }
          });
        });
    }
    // this.filteredPokemons = filteredPokemon;
    console.log(filteredPokemon);
  }

  // Ordenar
  odernationPokemon(value: any) {
    if (value === 'name') {
      const sorted = this.filteredPokemons.sort((a, b) => {
        return a.national_number < b.national_number
          ? 1
          : a.national_number > b.national_number
          ? -1
          : 0;
      });

      console.log(sorted);
    } else {
      const sorted = this.filteredPokemons.sort((a, b) => {
        return a.national_number > b.national_number
          ? 1
          : a.national_number < b.national_number
          ? -1
          : 0;
      });

      console.log(sorted);
    }
  }

  test(event: any) {
    console.log(event);
  }
}
