import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artwork } from '../models/artwork';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  private baseUrl = 'http://localhost:8080/api/artworks';

  constructor(private http: HttpClient) {}

  // CREATE Artwork
  createArtwork(artwork: Artwork): Observable<Artwork> {
    return this.http.post<Artwork>(this.baseUrl, artwork);
  }

  // GET All Artworks
  getAllArtworks(): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(this.baseUrl);
  }

  // GET Artwork by id
  getArtworkById(id: number): Observable<Artwork> {
    return this.http.get<Artwork>(`${this.baseUrl}/${id}`);
  }

  // DELETE Artwork
  deleteArtwork(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  updateArtwork(id: number, artwork: Artwork): Observable<Artwork> {
  return this.http.put<Artwork>(`${this.baseUrl}/${id}`, artwork);
}
}