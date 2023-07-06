import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AlbumComponent } from './album/album.component';
import { ArtistiComponent } from './artisti/artisti.component';
import { TrackComponent } from './track/track.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ArtistiComponent,
    TrackComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
