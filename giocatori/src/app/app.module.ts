import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { GiocatoreComponent } from './giocatore/giocatore.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    GiocatoreComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
