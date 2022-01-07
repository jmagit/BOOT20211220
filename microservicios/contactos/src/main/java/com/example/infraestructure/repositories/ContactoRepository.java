package com.example.infraestructure.repositories;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.example.domains.entities.Contacto;

public interface ContactoRepository extends ReactiveMongoRepository<Contacto, Integer> {

}
