import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ArtistService } from '../../services/artist.service';
import { Artist } from '../../models/artist';

@Component({
  selector: 'app-artistform',
  standalone: true,
  templateUrl: './artistform.component.html',
  styleUrls: ['./artistform.component.css'],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class ArtistformComponent {

  artist: Artist = {
    name: '',
    biography: '',
    country: ''
  };

  constructor(private artistService: ArtistService) {} //const artistService = inject(ArtistService);

  submitArtist() {
    this.artistService.createArtist(this.artist).subscribe({
      next: (response) => {
        console.log("Artist saved", response);
        alert("Artist saved successfully!");
        this.resetForm();
      },
      error: (error) => {
        console.error("Error", error);
        alert("Error saving artist");
      }
    });
  }

  resetForm() {
    this.artist = {
      name: '',
      biography: '',
      country: ''
    };
  }
}