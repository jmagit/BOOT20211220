package com.example.application.resource;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.domains.entities.Contacto;
import com.example.exceptions.BadRequestException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;
import com.example.infraestructure.repositories.ContactoRepository;

import lombok.Value;
import lombok.experimental.var;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(path = "/api/contactos")
public class ContactoResource {
	@Value
	public static class PageCount {
		private int pages;
		private int rows;
	}

	@Autowired
	private ContactoRepository dao;

	@GetMapping
	public Flux<Contacto> getAll(@RequestParam(required = false) String _sort) {
		if (_sort != null)
			return dao.findAll(Sort.by(Direction.ASC, _sort));
		return dao.findAll();
	}

	@GetMapping(params = "_page")
	public Flux<Contacto> getPaged(@RequestParam int _page,
			@RequestParam(required = false, defaultValue = "20") int _rows, @RequestParam(required = false) String _sort) {
		return (_sort == null ? dao.findAll():dao.findAll(Sort.by(Direction.ASC, _sort))).skip(_rows * _page).take(_rows);
	}

	@GetMapping(params = "_page=count")
	public Mono<PageCount> getPageCount(@RequestParam(required = false, defaultValue = "20") int _rows) {
		return dao.count().map(rows -> new PageCount((int) Math.ceil((double) rows / _rows), rows.intValue()));
	}

	@GetMapping(path = "/{id}")
	public Mono<Contacto> getOne(@PathVariable int id) throws Exception {
		return dao.findById(id).single().onErrorMap(original -> new NotFoundException(original));
	}

	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public Mono<Object> add(@Valid @RequestBody Contacto item, ServerHttpRequest request) throws Exception {
		item.setId(0);
		return dao.findById(item.getId())
				.flatMap(oldItem -> Mono.error(new InvalidDataException("Duplicate key"))) 
				.switchIfEmpty(
						dao.findAll(Sort.by(Direction.DESC, "id")).take(1).flatMap(lastItem -> {
							item.setId(lastItem.getId() + 1);
							return dao.save(item);
						}).single()); // ConstraintViolationException
	}

	@PutMapping(path = "/{id}")
	public Mono<Contacto> modify(@PathVariable int id, @Valid @RequestBody Contacto item) throws Exception {
		if (item.getId() != id)
			throw new BadRequestException("No coinciden los ID");
		return dao.findById(item.getId())
				.flatMap(oldItem -> dao.save(item)) // ConstraintViolationException
				.switchIfEmpty(Mono.error(new NotFoundException("Missing item")));
	}

	@DeleteMapping(path = "/{id}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
//	public Mono<ResponseEntity<Object>> delete(@PathVariable int id) {
	public Mono<Void> delete(@PathVariable int id) {
		return dao.deleteById(id)
//				.flatMap(oldItem -> Mono.just(ResponseEntity.noContent().build()))
//				.switchIfEmpty(Mono.error(new NotFoundException("Missing item")));
				;
	}
}
