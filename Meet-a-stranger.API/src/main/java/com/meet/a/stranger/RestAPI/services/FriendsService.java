package com.meet.a.stranger.RestAPI.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.meet.a.stranger.RestAPI.repositories.IFriendsRepository;

public class FriendsService {
	@Autowired
	private IFriendsRepository friendsRepository;
	
	
}
