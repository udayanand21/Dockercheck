package com.artgallery.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "artists")
public class Artist {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	public Long getId() {
		return id;
	}
	private String name;
	private String biography;
	private String country;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBiography() {
		return biography;
	}
	public void setBiography(String biography) {
		this.biography = biography;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public Artist() {}
	public Artist(String name, String biography, String country) {
		super();
		this.name = name;
		this.biography = biography;
		this.country = country;
	}

}
