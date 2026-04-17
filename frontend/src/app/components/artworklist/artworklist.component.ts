import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkService } from '../../services/artwork.service';
import { Artwork } from '../../models/artwork';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artworklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artworklist.component.html',
  styleUrls: ['./artworklist.component.css']
})
export class ArtworklistComponent implements OnInit {

  artworks: Artwork[] = [];   //  
  constructor(private artworkService: ArtworkService ,private router: Router) {}

  ngOnInit(): void {
    this.loadArtworks();
  }

  loadArtworks() {
    this.artworkService.getAllArtworks().subscribe({
      next: (data) => {
        this.artworks = data;
      },
      error: (err) => {
        console.error("Failed to load artworks", err);
      }
    });
  }

  deleteArtwork(id: number | undefined) {
    if (!id) return; // safety
    if (confirm("Delete this artwork?")) {
      this.artworkService.deleteArtwork(id).subscribe({
        next: () => this.loadArtworks(),
        error: (err) => console.error("Failed to delete artwork", err)
      });
    }
  }
  
editArtwork(id: number | undefined) {
  if (id) {
    this.router.navigate(['/edit-artwork', id]);
  }
}
}