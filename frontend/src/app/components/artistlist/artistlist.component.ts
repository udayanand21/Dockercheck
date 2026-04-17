import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistService } from '../../services/artist.service';
@Component({
  selector: 'app-artistlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artistlist.component.html',
  styleUrl: './artistlist.component.css'
})
export class ArtistlistComponent {
   artists: any[] = [];
   constructor(private artistService: ArtistService) {}
   
 ngOnInit(): void {
    this.loadArtists();
  }
  loadArtists(){
    this.artistService.getAllArtists().subscribe({
      next: (data) => {
        this.artists = data;
      },
      error: (error) => {
        console.error("Failed to load artists", error);
      }
   });
  }
  
 deleteArtist(id: number) {
    if (confirm("Are you sure you want to delete this artist?")) {
      this.artistService.deleteArtist(id).subscribe(() => {
        this.loadArtists();
      });
    }
  }

}
