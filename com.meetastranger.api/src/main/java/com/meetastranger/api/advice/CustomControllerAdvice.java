package com.meetastranger.api.advice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class CustomControllerAdvice {

	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseBody
	public ResponseEntity<?> handleValidationExceptions(
	  MethodArgumentNotValidException ex) {
	    List<String> errors = new ArrayList<String>();
	    ex.getBindingResult().getAllErrors().forEach((error) -> {
	        String errorMessage = error.getDefaultMessage();
	        errors.add(errorMessage);
	    });
	    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
	}
}
