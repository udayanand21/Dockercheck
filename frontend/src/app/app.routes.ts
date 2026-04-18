import { Routes } from '@angular/router';
import { ArtistformComponent } from './components/artistform/artistform.component';
import { ArtistlistComponent } from './components/artistlist/artistlist.component';
import { ArtworkformComponent } from './components/artworkform/artworkform.component';
import { ArtworklistComponent } from './components/artworklist/artworklist.component';
import { EditartworkComponent } from './components/editartwork/editartwork.component';
export const routes: Routes = [
  { path: 'add-artist', component: ArtistformComponent },
  { path: '', redirectTo: 'add-artist', pathMatch: 'full' },
  { path: "artist-list", component: ArtistlistComponent },
  { path: "add-artwork", component: ArtworkformComponent },
  { path: "artwork-list", component: ArtworklistComponent },
  { path: 'edit-artwork/:id', component: EditartworkComponent }
];