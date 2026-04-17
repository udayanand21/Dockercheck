package com.artgallery.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.artgallery.Entity.Artist;
import com.artgallery.Repository.ArtistRepository;

@Service
public class ArtistService {

    @Autowired
    private ArtistRepository artistRepository;

 
    public Artist saveArtist(Artist artist) {
        return artistRepository.save(artist);
    }

   
    public List<Artist> getAllArtists() {
        return artistRepository.findAll();
    }

    public Optional<Artist> getArtistById(Long id) {
        return artistRepository.findById(id);
    }
    
    public boolean deleteArtist(Long id) {
        if (artistRepository.existsById(id)) {
            artistRepository.deleteById(id);
            return true;
        }
        return false;
    }
}