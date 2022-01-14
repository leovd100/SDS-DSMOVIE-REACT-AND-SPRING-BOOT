package com.github.leovd100.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.leovd100.dsmovie.entities.Score;
import com.github.leovd100.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

	

}
