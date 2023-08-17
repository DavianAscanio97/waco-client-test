import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '@environments/environment'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  API_URL = `${environment.apiBaseUrl}/pokemons`;

  constructor(private _httpClient: HttpClient) { }

  getAllPokemon(): Observable<any> {
    return this._httpClient.get<any>(`${this.API_URL}`)
  }
}
