package com.example;

import java.io.Serializable;

import javax.annotation.processing.FilerException;

import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingRequestHeaderException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.bind.support.WebExchangeBindException;

import com.example.exceptions.BadRequestException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;

import reactor.core.publisher.Mono;

@RestControllerAdvice
public class ApiExceptionHandler {
	public static class ErrorMessage implements Serializable {
		private static final long serialVersionUID = 1L;
		private String error, message;

		public ErrorMessage(String error, String message) {
			this.error = error;
			this.message = message;
		}

		public String getError() {
			return error;
		}

		public void setError(String error) {
			this.error = error;
		}

		public String getMessage() {
			return message;
		}

		public void setMessage(String message) {
			this.message = message;
		}
	}
    @ExceptionHandler({NotFoundException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Mono<ErrorMessage> notFoundRequest(ServerHttpRequest request, Exception exception) {
        return Mono.just(new ErrorMessage(exception.getMessage(), request.getURI().toString()));
    }

    @ExceptionHandler({ BadRequestException.class, // MissingRequestHeaderException.class,
            FilerException.class, InvalidDataException.class, MethodArgumentNotValidException.class,
            WebExchangeBindException.class
	})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Mono<ErrorMessage> badRequest(Exception exception) {
        return Mono.just(new ErrorMessage(exception.getMessage(), ""));
    }

}
