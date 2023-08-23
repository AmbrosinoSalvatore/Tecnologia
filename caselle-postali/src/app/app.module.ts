import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasellaPostaComponent } from './casella-posta/casella-posta.component';
import { CassettieraComponent } from './cassettiera/cassettiera.component';

@NgModule({
  declarations: [
    AppComponent,
    CasellaPostaComponent,
    CassettieraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
