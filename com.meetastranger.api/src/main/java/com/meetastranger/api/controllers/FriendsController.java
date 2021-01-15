package com.meetastranger.api.controllers;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.meetastranger.api.dtos.FriendReadDTO;
import com.meetastranger.api.services.FriendsService;
import com.meetastranger.api.util.JwtUtil;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class FriendsController {

	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private FriendsService friendsService;

	@Autowired
	private ModelMapper modelMapper;

	Logger logger = LoggerFactory.getLogger(FriendsController.class);
		
	@RequestMapping(value="/friends", method = RequestMethod.GET)
	public ResponseEntity<?> getFriends(@RequestHeader(name = "Authorization") String token) {
		String jwt = token.substring(7);
		List<FriendReadDTO> friends = friendsService.getFriendsbyUserId(Integer.parseInt(jwtUtil.extractId(jwt)));
		return ResponseEntity.ok(friends);
	}

	@RequestMapping(value = "/friends/{friendId}", method = RequestMethod.POST)
	public ResponseEntity<?> addFriend(@PathVariable int friendId,
			@RequestHeader(name = "Authorization") String token) {
		String jwt = token.substring(7);
		if(friendsService.addFriend(Integer.parseInt(jwtUtil.extractId(jwt)),friendId)) {
			return ResponseEntity.ok("");
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
	}
}
