package com.github.leovd100.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.leovd100.dsmovie.entities.Score;
import com.github.leovd100.dsmovie.entities.ScorePK;
import com.github.leovd100.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByEmail(String email);


}
