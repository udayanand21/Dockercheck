package com.artgallery.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "artworks")
public class Artwork {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String style;
    private String description;
    private String imageUrl;

  
    @ManyToOne
    @JoinColumn(name = "artist_id")
    private Artist artist;

  
    public Artwork() {}

    public Artwork(String title, String style, String description, String imageUrl, Artist artist) {
        this.title = title;
        this.style = style;
        this.description = description;
        this.imageUrl = imageUrl;
        this.artist = artist;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }
}