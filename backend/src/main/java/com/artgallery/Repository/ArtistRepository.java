package com.artgallery.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.artgallery.Entity.Artist;

public interface ArtistRepository extends JpaRepository<Artist, Long> {
}
