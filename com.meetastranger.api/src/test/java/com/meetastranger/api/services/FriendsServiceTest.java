package com.meetastranger.api.services;

import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.meetastranger.api.dtos.FriendReadDTO;
import com.meetastranger.api.models.UserEntity;
import com.meetastranger.api.repositories.IUserRepository;

@SpringBootTest
class FriendsServiceTest {
	
	@InjectMocks
	FriendsService friendsService;
	
	@Mock
	IUserRepository userRepository;
	
	@BeforeEach
	void setUp() throws Exception{
		MockitoAnnotations.openMocks(friendsService);
	}
	@Test
	void testGetFriends() {
		//Arrange
		UserEntity user1 = new UserEntity();
		user1.setId(1);
		user1.setUsername("henk");
		UserEntity user2 = new UserEntity();
		user2.setId(2);
		user2.setUsername("peter");
		
		user1.getFollowers().add(user2);
		user1.getFollowing().add(user2);
		

		when(userRepository.findById(1)).thenReturn(Optional.of(user1));
		
		//Act
		List<FriendReadDTO> friends_user1 = friendsService.getFriendsbyUserId(user1.getId());
		
		//Assert
		Assert.assertTrue(friends_user1.contains(new FriendReadDTO(user2.getId(),user2.getUsername())));
	}
	
	@Test
	void testGetFriendsFalse() {
		//Arrange
		UserEntity user1 = new UserEntity();
		user1.setId(1);
		user1.setUsername("henk");
		UserEntity user2 = new UserEntity();
		user2.setId(2);
		user2.setUsername("peter");
		
		user1.getFollowers().add(user2);
		//only getFollowers contains friend, getFollowing does not, so it should not be in friends

		when(userRepository.findById(1)).thenReturn(Optional.of(user1));
		
		//Act
		List<FriendReadDTO> friends_user1 = friendsService.getFriendsbyUserId(user1.getId());
		
		//Assert
		Assert.assertFalse(friends_user1.contains(new FriendReadDTO(user2.getId(),user2.getUsername())));
	}
	
	@Test
	void testSetFriend() {
		//Arrange
		UserEntity user1 = new UserEntity();
		user1.setId(1);
		user1.setUsername("henk");
		UserEntity user2 = new UserEntity();
		user2.setId(2);
		user2.setUsername("peter");
		
		when(userRepository.findById(1)).thenReturn(Optional.of(user1));
		when(userRepository.findById(2)).thenReturn(Optional.of(user2));
		
		//Act
		boolean isSaved = friendsService.addFriend(user1.getId(),user2.getId());
		
		//Assert
		Assert.assertTrue(isSaved);
	}
	
	@Test
	void testSetFriendFalse() {
		//Arrange
		UserEntity user1 = new UserEntity();
		user1.setId(1);
		user1.setUsername("henk");
		UserEntity user2 = new UserEntity();
		user2.setId(2);
		user2.setUsername("peter");
		
		when(userRepository.findById(1)).thenReturn(Optional.of(user1));
		when(userRepository.findById(2)).thenReturn(Optional.of(user2));
		
		//Act
		//User befriending itself
		boolean isSaved = friendsService.addFriend(user1.getId(),user1.getId());
		
		//Assert
		Assert.assertFalse(isSaved);
	}
	


}
