package com.meetastranger.api.services;

import static org.mockito.Mockito.when;

import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.meetastranger.api.MainUserDetails;
import com.meetastranger.api.models.UserEntity;
import com.meetastranger.api.repositories.IUserRepository;

@SpringBootTest
public class MainUserDetailsServiceTest {

	@InjectMocks
	MainUserDetailsService userDetailsService;
	
	@Mock
	IUserRepository userRepository; 
	
	@BeforeEach
	void setUp() throws Exception{
		MockitoAnnotations.openMocks(userDetailsService);
	}
	
	@Test
	void getUserByUsername(){
		//Arrange
		UserEntity user1 = new UserEntity();
		user1.setId(1);
		user1.setUsername("henk");
		when(userRepository.getByUsername("henk")).thenReturn(user1);
		
		//Act
		MainUserDetails user = userDetailsService.loadUserByUsername("henk");
		
		//Assert
		Assert.assertEquals("henk", user.getUsername());
	}
}
