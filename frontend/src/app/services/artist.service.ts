import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private baseUrl = 'http://localhost:8080/api/artists';

  constructor(private http: HttpClient) { }

  createArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.baseUrl, artist);
  }

  
  getAllArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.baseUrl);
  }


  getArtistById(id: number): Observable<Artist> {
    return this.http.get<Artist>(`${this.baseUrl}/${id}`);
  }


  deleteArtist(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}