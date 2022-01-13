package com.github.leovd100.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {
	
	@EmbeddedId // id composto
	private ScorePK id = new ScorePK();
	private Double value;
	

	public Score() {}

	public void setMovie(Movie movie) {
		getId().setMovie(movie);
	}
	
	public void setUser(User user) {
		getId().setUser(user);
	}
	
	
	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
	
	
}
