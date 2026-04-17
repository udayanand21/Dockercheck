package com.artgallery.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.artgallery.Entity.Artist;
import com.artgallery.Service.ArtistService;

@RestController
@RequestMapping("/api/artists")
@CrossOrigin("*")
public class ArtistController {

    @Autowired
    private ArtistService artistService;

    
    @PostMapping
    public ResponseEntity<Artist> createArtist(@RequestBody Artist artist) {
        Artist saved = artistService.saveArtist(artist);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    
    @GetMapping
    public List<Artist> getAllArtists() {
        return artistService.getAllArtists();
    }

   
    @GetMapping("/{id}")
    public ResponseEntity<?> getArtistById(@PathVariable Long id) {
        Optional<Artist> artist = artistService.getArtistById(id);
        if (artist.isPresent()) {
            return ResponseEntity.ok(artist.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .body("Artist not found");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteArtist(@PathVariable Long id) {
        boolean deleted = artistService.deleteArtist(id);

        if (deleted) {
            return ResponseEntity.ok("Artist deleted successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .body("Artist not found");
        }
    }
}