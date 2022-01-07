package com.example.domains.entities.dtos;


import com.example.domains.entities.Film;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiModelProperty.AccessMode;
import lombok.Value;

@ApiModel(value = "PeliculaCorto", description = "Version corta de las peliculas")
@Value
public class FilmShortDTO {
	@ApiModelProperty(value = "Identificador de la pelicula", required = true, accessMode = AccessMode.READ_ONLY)
	private int filmId;
	@ApiModelProperty(value = "Titulo de la pelicula", required = true)
	private String title;
	
	public static FilmShortDTO from(Film source) {
		return new FilmShortDTO(source.getFilmId(), source.getTitle());
	}
}
