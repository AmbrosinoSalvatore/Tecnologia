import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { TrackComponent } from './track/track.component';
import { ItemComponent } from './item/item.component';
const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'track', component: TrackComponent },
  {path: 'item/:id', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
