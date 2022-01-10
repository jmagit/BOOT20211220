package com.example;

import java.util.List;
import java.util.Optional;

public interface DomainService<E, K> {
	List<E> getAll();
	
	Optional<E> getOne(K id);
	
	E add(E item);
	
	E modify(E item);
	
	void delete(E item);
	void deleteById(K id);
}
