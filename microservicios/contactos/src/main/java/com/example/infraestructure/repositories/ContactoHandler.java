package com.example.infraestructure.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.example.domains.entities.Contacto;
import com.example.exceptions.BadRequestException;
import com.example.exceptions.NotFoundException;

import reactor.core.publisher.Mono;

@Service
public class ContactoHandler {
	@Autowired
	private ContactoRepository dao;

	public Mono<ServerResponse> getAll(ServerRequest request) {
		return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(dao.findAll(), Contacto.class);
	}

	public Mono<ServerResponse> getOne(ServerRequest request) {
		return dao.findById(Integer.valueOf(request.pathVariable("id")))
			.flatMap(item -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).bodyValue(item))
			.switchIfEmpty(ServerResponse.notFound().build());
	}

	public Mono<ServerResponse> create(ServerRequest request) {
////		Mono<Actor> item = request.bodyToMono(Actor.class);
////        return ServerResponse.ok().build(dao.save(item));	
//		// URI location = ...
//		// ServerResponse.created(location).build();
//		return request.bodyToMono(Actor.class)
//				.doOnNext(item -> dao.save(item))
//				.then(ServerResponse.ok().build());
		return Mono.empty();
    }

	public Mono<ServerResponse> update(ServerRequest request) {
		return Mono.empty();
	}

	public Mono<ServerResponse> delete(ServerRequest request) {
		return Mono.empty();
	}

}
