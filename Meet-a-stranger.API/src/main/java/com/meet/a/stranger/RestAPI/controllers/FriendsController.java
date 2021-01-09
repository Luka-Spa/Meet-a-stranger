package com.meet.a.stranger.RestAPI.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.meet.a.stranger.RestAPI.util.JwtUtil;

@RestController
public class FriendsController {

	@Autowired
	private JwtUtil jwtUtil;
	
	@RequestMapping(value="/friends", method = RequestMethod.GET)
	public ResponseEntity<?> getFriends(@RequestHeader (name="Authorization") String token){
		String jwt = token.substring(7);
		
		return ResponseEntity.ok(jwtUtil.extractId(jwt));
	}
	
	@RequestMapping(value = "/{friendId}", method = RequestMethod.POST)
	public ResponseEntity<?> addFriend(@PathVariable String userId, @RequestHeader (name="Authorization") String token){
		return ResponseEntity.ok("");
	}
}
