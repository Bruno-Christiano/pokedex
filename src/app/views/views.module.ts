import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ListPokemonComponent } from './pokemons/list-pokemon/list-pokemon.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, ListPokemonComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  exports: [HomeComponent],
})
export class ViewsModule {}
