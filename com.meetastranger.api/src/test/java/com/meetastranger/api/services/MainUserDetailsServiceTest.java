package com.meetastranger.api.services;

import static org.mockito.Mockito.when;

import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.meetastranger.api.MainUserDetails;
import com.meetastranger.api.dtos.RegisterCreateDTO;
import com.meetastranger.api.models.UserEntity;
import com.meetastranger.api.repositories.IUserRepository;

@SpringBootTest
public class MainUserDetailsServiceTest {

	@InjectMocks
	MainUserDetailsService userDetailsService;
	
	@Mock
	PasswordEncoder bcryptEncoder = new BCryptPasswordEncoder();;
	
	@Mock
	IUserRepository userRepository; 
	
	@Mock
	ModelMapper mapper = new ModelMapper();
	
	@BeforeEach
	void setUp() throws Exception{
		MockitoAnnotations.openMocks(userDetailsService);
		MockitoAnnotations.openMocks(bcryptEncoder);
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
	
	@Test
	void getUserByUsernameNotExisting(){
		//Arrange
		UserEntity user1 = new UserEntity();
		user1.setId(1);
		user1.setUsername("henk");
		when(userRepository.getByUsername("henk")).thenReturn(user1);
		
		//Act
		MainUserDetails user = userDetailsService.loadUserByUsername("peter");
		
		//Assert
		Assert.assertNull(user.getUser());
	}
	
	@Test
	void saveUser() {
		//Arrange
		RegisterCreateDTO user1 = new RegisterCreateDTO();
		user1.setUsername("henk");
		user1.setPassword("password");
		when(userRepository.save(ArgumentMatchers.any())).thenReturn(new UserEntity());
		
		//Act
		boolean isSaved = userDetailsService.saveUser(user1);
		
		//Assert
		Assert.assertTrue(isSaved);
	}
}
