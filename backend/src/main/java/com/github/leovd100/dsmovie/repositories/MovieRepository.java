package com.github.leovd100.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.leovd100.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
