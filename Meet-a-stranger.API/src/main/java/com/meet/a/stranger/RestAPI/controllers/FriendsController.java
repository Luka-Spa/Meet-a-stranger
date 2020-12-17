package com.meet.a.stranger.RestAPI.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FriendsController {

	@RequestMapping(value = "/friends", method = RequestMethod.GET)
	public ResponseEntity<?> getFriendsByJWT(){
		return ResponseEntity.ok("");
	}
}
