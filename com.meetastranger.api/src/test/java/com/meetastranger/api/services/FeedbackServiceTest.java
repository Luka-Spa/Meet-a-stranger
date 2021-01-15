package com.meetastranger.api.services;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.meetastranger.api.dtos.FeedbackCreateDTO;
import com.meetastranger.api.dtos.FeedbackReadDTO;
import com.meetastranger.api.models.FeedbackEntity;
import com.meetastranger.api.models.UserEntity;
import com.meetastranger.api.repositories.IFeedbackRepository;
import com.meetastranger.api.repositories.IUserRepository;

@SpringBootTest
class FeedbackServiceTest {
	
	@InjectMocks
	FeedbackService feedbackService;
	
	@Mock
	IFeedbackRepository feedbackRepository;
	
	@Mock
	IUserRepository userRepository;
	
	@BeforeEach
	void setUp() throws Exception{
		MockitoAnnotations.openMocks(feedbackService);
	}

	
	@Test
	void getAllFeedback() {
		//Arrange	
		UserEntity user = new UserEntity();
		user.setUsername("henk");
		List<FeedbackEntity> feedback_entities = new ArrayList<FeedbackEntity>();
		feedback_entities.add(new FeedbackEntity(0,user,"content",new Date()));
		when(feedbackRepository.findAll()).thenReturn(feedback_entities);
		
		//Act
		List<FeedbackReadDTO> feedback = feedbackService.getAllFeedback();
		
		//Assert
		Assert.assertTrue(feedback.size() == 1);
		Assert.assertTrue(feedback.get(0).getFrom_username() == user.getUsername());
		
	}
	
	@Test
	void getAllFeedbackNoFeedback() {
		//Arrange	
		List<FeedbackEntity> feedback_entities = new ArrayList<FeedbackEntity>();
		when(feedbackRepository.findAll()).thenReturn(feedback_entities);
		
		//Act
		List<FeedbackReadDTO> feedback = feedbackService.getAllFeedback();
		
		//Assert
		Assert.assertTrue(feedback.size() == 0);
		Assert.assertTrue(feedback.isEmpty());
		
	}
	
	@Test
	void saveFeedback() {
		//Arrange	
		UserEntity user = new UserEntity();
		user.setUsername("henk");
		user.setId(1);
		FeedbackCreateDTO feedback_from_user = new FeedbackCreateDTO();
		
		FeedbackEntity feedback = new FeedbackEntity();
		feedback.setContent("test");
		when(feedbackRepository.save(ArgumentMatchers.any())).thenReturn(feedback);
		when(userRepository.findById(ArgumentMatchers.anyInt())).thenReturn(Optional.of(user));
		
		//Act
		boolean isSaved = feedbackService.saveFeedback(user.getId(), feedback_from_user );
		
		//Assert
		Assert.assertTrue(isSaved);
		
	}
	



	


}
