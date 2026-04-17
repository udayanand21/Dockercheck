import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Artwork } from '../../models/artwork';
import { Artist } from '../../models/artist';

import { ArtistService } from '../../services/artist.service';
import { ArtworkService } from '../../services/artwork.service';

@Component({
  selector: 'app-artworkform',
  standalone: true,
  templateUrl: './artworkform.component.html',
  styleUrl: './artworkform.component.css',
  imports: [FormsModule, CommonModule]
})
export class ArtworkformComponent implements OnInit {

  // Correct initial state matching your Artwork model
  artwork: Artwork = {
    title: '',
    style: '',
    description: '',
    imageUrl: '',
    artist: {} as Artist
  };

  // List of artists for dropdown
  artists: Artist[] = [];
  selectedArtistId: number | null = null;

  constructor(
    private artistService: ArtistService,
    private artworkService: ArtworkService
  ) {}

  ngOnInit(): void {
    this.loadArtists();
  }

  // Load all artists for dropdown
  loadArtists() {
    this.artistService.getAllArtists().subscribe({
      next: (data) => {
        this.artists = data;
      },
      error: (err) => {
        console.error("Failed to load artists", err);
      }
    });
  }

  // Submit artwork
  submitArtwork() {

    // Validation
    if (!this.selectedArtistId) {
      alert("Please select an artist");
      return;
    }

    // Attach artist object with ID
    this.artwork.artist = { id: this.selectedArtistId } as Artist;

    console.log("Sending to backend:", this.artwork);

    this.artworkService.createArtwork(this.artwork).subscribe({
      next: (response) => {
        alert("Artwork saved successfully!");
        console.log("Saved Artwork:", response);
        this.resetForm();
      },
      error: (err) => {
        console.error("Error saving artwork:", err);
        alert("Error saving artwork");
      }
    });
  }

  // Reset everything
  resetForm() {
    this.artwork = {
      title: '',
      style: '',
      description: '',
      imageUrl: '',
      artist: {} as Artist
    };
    this.selectedArtistId = null;
  }
}