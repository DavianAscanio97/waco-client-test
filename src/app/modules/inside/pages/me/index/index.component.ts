import { Component, HostListener, OnInit } from '@angular/core';
import { PokemonService } from '@app/shareds/services/pokemon.service';
import { UsersService } from '@app/shareds/services/users.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [PokemonService]
})
export class IndexComponent implements OnInit {

  public loading = false;
  pokemons: Array<any> = []
  filteredPokemons: Array<any> = []
  searchTerm: string  = ''
  itemsPerLoad = 20;
  constructor(
    private _pokemonService: PokemonService,
    private _usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.loadPokemons()
  }

  async loadPokemons(){
    this.loading = true;
    this.pokemons = await lastValueFrom(
      this._pokemonService.getAllPokemon()
    )
    this.loadMoreItems();
    this.loading = false;
  }

  async changeFavorite(action: string, item: any){
    const resp = await lastValueFrom(
      this._usersService.changeFavorites(action, { pokemonName: item.name })
    )
    if (resp.status === 'success') {
      this.filteredPokemons.map((p) => {
        if (p.name == item.name) {
          if (action == 'add') p.isFavorite = true
          if (action == 'remove') p.isFavorite = false
        }
        return p
      })
    } else {
      alert(resp.message)
    }
  }

  filterPokemons(): void {
    if (this.searchTerm.length >= 3) {
      this.filteredPokemons = this.pokemons.filter((pokemon) =>
        pokemon.name.includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.itemsPerLoad = 20;
      this.loadMoreItems();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight) {
      this.loadMoreItems();
    }
  }

  loadMoreItems(): void {
    const remainingPokemons = this.pokemons.slice(this.filteredPokemons.length, this.filteredPokemons.length + this.itemsPerLoad);
    this.filteredPokemons = this.filteredPokemons.concat(remainingPokemons);
  }

}
