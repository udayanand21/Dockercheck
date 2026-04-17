package com.artgallery.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.artgallery.Entity.Artwork;
import com.artgallery.Service.ArtworkService;

@RestController
@RequestMapping("/api/artworks")
@CrossOrigin("*")
public class ArtworkController {

    @Autowired
    private ArtworkService artworkService;

    // CREATE
    @PostMapping
    public ResponseEntity<Artwork> createArtwork(@RequestBody Artwork artwork) {
        Artwork savedArtwork = artworkService.saveArtwork(artwork);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedArtwork);
    }

    // GET ALL
    @GetMapping
    public List<Artwork> getAllArtworks() {
        return artworkService.getAllArtworks();
    }

    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getArtworkById(@PathVariable Long id) {
        Optional<Artwork> artwork = artworkService.getArtworkById(id);
        if (artwork.isPresent()) {
            return ResponseEntity.ok(artwork.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .body("Artwork not found");
        }
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteArtwork(@PathVariable Long id) {

        boolean removed = artworkService.deleteArtwork(id);

        if (removed) {
            // Return 200 always (even if already deleted)
            return ResponseEntity.ok("Artwork deleted");
        } else {
            // Return 200 so Angular doesn’t show error
            return ResponseEntity.ok("Artwork already deleted or not found");
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> updateArtwork(
            @PathVariable Long id,
            @RequestBody Artwork updatedArtwork) {
        
        Optional<Artwork> existing = artworkService.getArtworkById(id);

        if (existing.isPresent()) {
            updatedArtwork.setId(id);
            Artwork saved = artworkService.saveArtwork(updatedArtwork);
            return ResponseEntity.ok(saved);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("Artwork not found");
        }
    }
}