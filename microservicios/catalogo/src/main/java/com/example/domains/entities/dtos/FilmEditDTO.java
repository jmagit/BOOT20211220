package com.example.domains.entities.dtos;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.example.domains.entities.Actor;
import com.example.domains.entities.Category;
import com.example.domains.entities.Film;
import com.example.domains.entities.FilmActor;
import com.example.domains.entities.FilmCategory;
import com.example.domains.entities.Language;
import com.fasterxml.jackson.annotation.JsonFormat;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiModelProperty.AccessMode;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@ApiModel(value = "PeliculaEditor", description = "Version editable de las peliculas")
@Data @AllArgsConstructor @NoArgsConstructor
public class FilmEditDTO {
	@ApiModelProperty(value = "Identificador de la pelicula", required = true, accessMode = AccessMode.READ_ONLY)
	private int filmId;
	@ApiModelProperty(value = "Descripcion de la pelicula" )
	private String description;
	@ApiModelProperty(value = "Duración de la pelicula", required = true)
	private int length;
	@ApiModelProperty(value = "Clasificación de la pelicula", allowableValues = "G, PG, PG-13, R, NC-17")
	private String rating;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy")
	private Short releaseYear;
	private byte rentalDuration;
	private BigDecimal rentalRate;
	private BigDecimal replacementCost;
	@ApiModelProperty(value = "Titulo de la pelicula", required = true, allowableValues = "Un maximo de 255 caracteres")
	private String title;
	private Integer languageId;
	private Integer languageVOId;
	private List<Integer> actors = new ArrayList<Integer>();
	private List<Integer> categories = new ArrayList<Integer>();

	public Film update(Film target) {
		//target.setFilmId(filmId);
		target.setDescription(description);
		if(target.getLength() != length) target.setLength(length);
		target.setRating(rating);
		target.setReleaseYear(releaseYear);
		target.setRentalDuration(rentalDuration);
		target.setRentalRate(rentalRate);
		target.setReplacementCost(replacementCost);
		target.setTitle(title);
		if (languageId == null) {
			target.setLanguage(null);
		} else if(target.getLanguage() == null || (target.getLanguage() != null && target.getLanguage().getLanguageId() != languageId)) {
			target.setLanguage(new Language(languageId));
		}
		if (languageVOId == null) {
			target.setLanguageVO(null);
		} else if(target.getLanguageVO() == null || (target.getLanguageVO() != null && target.getLanguageVO().getLanguageId() != languageVOId)) {
			target.setLanguageVO(new Language(languageVOId));
		}
		// Borra los actores que sobran
		List<FilmActor> delAct = target.getFilmActors().stream()
			.filter(item -> !actors.contains(item.getActor().getActorId()))
			.collect(Collectors.toList());
		delAct.forEach(item -> target.removeFilmActor(item));
		// Añade los actores que faltan
		actors.stream()
			.filter(item -> !target.getFilmActors().stream().anyMatch(o -> o.getActor().getActorId() == item))
			.forEach(item -> target.addFilmActor(new Actor(item)));
		// Borra las categorias que sobran
		List<FilmCategory> delCat = target.getFilmCategories().stream()
			.filter(item -> !categories.contains(item.getCategory().getCategoryId()))
			.collect(Collectors.toList());
		delCat.forEach(item -> target.removeFilmCategory(item));
		// Añade las categorias que faltan
		categories.stream()
			.filter(item -> !target.getFilmCategories().stream().anyMatch(o -> o.getCategory().getCategoryId() == item))
			.forEach(item -> target.addFilmCategory(new Category(item)));
		return target;
	}
 	public static FilmEditDTO from(Film source) {
		return new FilmEditDTO(
				source.getFilmId(), 
				source.getDescription(),
				source.getLength(),
				source.getRating(),
				source.getReleaseYear(),
				source.getRentalDuration(),
				source.getRentalRate(),
				source.getReplacementCost(),
				source.getTitle(),
				source.getLanguage() == null ? null : source.getLanguage().getLanguageId(),
				source.getLanguageVO() == null ? null : source.getLanguageVO().getLanguageId(),
				source.getFilmActors().stream().map(item -> item.getActor().getActorId())
					.collect(Collectors.toList()),
				source.getFilmCategories().stream().map(item -> item.getCategory().getCategoryId())
					.collect(Collectors.toList())
				);
	}
	public static Film from(FilmEditDTO source) {
		Film rslt = new Film(
				source.getFilmId(), 
				source.getDescription(),
				source.getLength(),
				source.getRating(),
				source.getReleaseYear(),
				source.getRentalDuration(),
				source.getRentalRate(),
				source.getReplacementCost(),
				source.getTitle(),
				source.getLanguageId() == null ? null : new Language(source.getLanguageId()),
				source.getLanguageVOId() == null ? null : new Language(source.getLanguageVOId())
				);
//		source.getActors().stream()
//			.forEach(item -> rslt.addFilmActor(new Actor(item)));
//		source.getCategories().stream()
//			.forEach(item -> rslt.addFilmCategory(new Category(item)));
		return rslt;
	}

}
