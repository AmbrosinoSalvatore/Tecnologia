import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // DA IMPORTARE
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { ItemPokemonComponent } from './item-pokemon/item-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPokemonComponent,
    ItemPokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // DA IMPORTARE
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
