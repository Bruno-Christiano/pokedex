import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ListPokemonComponent } from './pokemons/list-pokemon/list-pokemon.component';

@NgModule({
  declarations: [HomeComponent, ListPokemonComponent],
  imports: [CommonModule, ComponentsModule, MatCardModule],
  exports: [HomeComponent],
})
export class ViewsModule {}
