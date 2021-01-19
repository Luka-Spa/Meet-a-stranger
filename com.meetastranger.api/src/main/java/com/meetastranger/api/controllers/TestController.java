package com.meetastranger.api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/")
public class TestController {
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<String> test() {
		return ResponseEntity.ok("Luka's REST API");
	}
}
