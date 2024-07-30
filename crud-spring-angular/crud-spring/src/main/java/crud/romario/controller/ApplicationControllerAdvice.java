package crud.romario.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import crud.romario.exception.RecordNotFoundException;

@RestControllerAdvice
public class ApplicationControllerAdvice {
	
	@ExceptionHandler(RecordNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public String handleNotFoundException(RecordNotFoundException ex) {
		return ex.getMessage();
	}
}
