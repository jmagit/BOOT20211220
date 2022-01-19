package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.config.EnableWebFlux;
import org.springframework.web.reactive.config.WebFluxConfigurer;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.example.exceptions.NotFoundException;
import com.example.infraestructure.repositories.ContactoHandler;

@Configuration
@EnableWebFlux
public class WebConfig implements WebFluxConfigurer {
//	@Autowired
//	ContactoHandler handler;

	@Bean
	public RouterFunction<?> routerContactos(ContactoHandler handler) {
		return RouterFunctions.route()
				.GET("/contacto/{id}", RequestPredicates.accept(MediaType.APPLICATION_JSON), handler::getOne)
				.GET("/contacto", RequestPredicates.accept(MediaType.APPLICATION_JSON), handler::getAll)
				.POST("/contacto", RequestPredicates.contentType(MediaType.APPLICATION_JSON), handler::create)
				.PUT("/contacto/{id}", RequestPredicates.contentType(MediaType.APPLICATION_JSON), handler::update)
				.DELETE("/contacto/{id}", handler::delete)
				.build();
	}

	@Bean
	public RouterFunction<?> routerPersonas(ContactoHandler handler) {
		return RouterFunctions.route()
				.GET("/person/{id}", RequestPredicates.accept(MediaType.APPLICATION_JSON), handler::getOne)
				.GET("/person", RequestPredicates.accept(MediaType.APPLICATION_JSON), handler::getAll)
//		    .POST("/person", handler::createPerson)
				.build();
	}
	
	@Bean
	public RouterFunction<ServerResponse> htmlRouter(
	  @Value("classpath:/public/index.html") Resource html) {
	    return RouterFunctions.route(RequestPredicates.GET("/"), request
	      -> ServerResponse.ok().contentType(MediaType.TEXT_HTML).syncBody(html)
	    );
	}
	
	@Bean
	RouterFunction<ServerResponse> staticResourceRouter(){
	    return RouterFunctions.resources("/**", new ClassPathResource("public/"));
	}
}
