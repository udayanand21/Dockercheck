package com.artgallery.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.artgallery.Entity.Artwork;
import com.artgallery.Repository.ArtworkRepository;

@Service
public class ArtworkService {

    @Autowired
    private ArtworkRepository artworkRepository;

    // Create artwork
    public Artwork saveArtwork(Artwork artwork) {
        return artworkRepository.save(artwork);
    }

   
    public List<Artwork> getAllArtworks() {
        return artworkRepository.findAll();
    }

    
    public Optional<Artwork> getArtworkById(Long id) {
        return artworkRepository.findById(id);
    }

   
    public boolean deleteArtwork(Long id) {
        if (artworkRepository.existsById(id)) {
            artworkRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
