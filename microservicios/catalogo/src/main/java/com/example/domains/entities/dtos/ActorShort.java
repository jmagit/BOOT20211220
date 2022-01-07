package com.example.domains.entities.dtos;

import org.springframework.beans.factory.annotation.Value;

public interface ActorShort {
	int getActorId();
	
	@Value("#{target.lastName + ', ' + target.firstName}")
	String getNombreCompleto();
}
