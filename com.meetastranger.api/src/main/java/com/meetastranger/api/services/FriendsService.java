package com.meetastranger.api.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meetastranger.api.dtos.FriendReadDTO;
import com.meetastranger.api.models.UserEntity;
import com.meetastranger.api.repositories.IUserRepository;

@Service
public class FriendsService {
	@Autowired
	private IUserRepository userRepository;

	public List<FriendReadDTO> getFriendsbyUserId(int userId) {
		List<FriendReadDTO> friends = new ArrayList<FriendReadDTO>();
		Optional<UserEntity> user = userRepository.findById(userId);
		if(user.isPresent()) {
			user.get().getFollowers().forEach(_user ->{
				if(user.get().getFollowing().contains(_user))
					friends.add(new FriendReadDTO(_user.getId(),_user.getUsername()));				
			});
		}
		return friends;
	}
	
	public boolean addFriend(int userId,int friendId) {
		Optional<UserEntity>user = userRepository.findById(userId);
		Optional<UserEntity> friend = userRepository.findById(friendId);
		if(user.isPresent() && friend.isPresent()) {
			if(user.get() != friend.get()) {
				if(!user.get().getFollowing().contains(friend.get())) {
					user.get().getFollowing().add(friend.get());
					userRepository.save(user.get());
				return true;
				}
			}
		}
		return false;
	}
}
