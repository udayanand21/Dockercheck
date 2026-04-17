package com.artgallery.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.artgallery.Entity.Artwork;

public interface ArtworkRepository extends JpaRepository<Artwork, Long> {
}
