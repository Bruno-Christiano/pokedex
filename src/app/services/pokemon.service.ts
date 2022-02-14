import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Pokemon } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  readonly baseUrl: string = 'https://unpkg.com/pokemons@1.1.0/pokemons.json';

  getAllPokemons() {
    return this.http.get<any>(this.baseUrl).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(() => {
      return new Error('Something bad happened; please try again later.');
    });
  }
}
