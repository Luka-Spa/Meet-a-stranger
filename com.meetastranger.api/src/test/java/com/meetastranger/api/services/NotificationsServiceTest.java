package com.meetastranger.api.services;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.meetastranger.api.dtos.NotificationReadDTO;
import com.meetastranger.api.models.NotificationEntity;
import com.meetastranger.api.models.NotificationType;
import com.meetastranger.api.models.UserEntity;
import com.meetastranger.api.repositories.INotificationsRepository;
import com.meetastranger.api.repositories.IUserRepository;

@SpringBootTest
class NotificationsServiceTest {
	
	@InjectMocks
	NotificationsService notificationsService;
	
	@Mock
	INotificationsRepository notificationsRepository;
	
	@Mock
	IUserRepository userRepository;
	
	@BeforeEach
	void setUp() throws Exception{
		MockitoAnnotations.openMocks(notificationsService);
	}

	
	@Test
	void getNotificationsByUser() {
		//Arrange
		UserEntity user1 = new UserEntity();
		user1.setId(1);
		user1.setUsername("henk");
		UserEntity user2 = new UserEntity();
		user2.setUsername("karel");
		user2.setId(2);
		
		List<NotificationEntity> notifications = new ArrayList<NotificationEntity>();
		notifications.add(new NotificationEntity(0,user1,user2,NotificationType.FRIENDREQUEST)); //should be in outcome
		notifications.add(new NotificationEntity(1,user2,user1,NotificationType.FRIENDREQUEST)); //should not be in outcome
		when(notificationsRepository.getByRecipient_id(2)).thenReturn(notifications.stream()
						.filter(not -> not.getRecipient().getId() == 2)
						.collect(Collectors.toList()));
		
		//Act
		List<NotificationReadDTO> notificationsDTO = notificationsService.getByUser(2);
		
		//Assert
		Assert.assertTrue(notificationsDTO.size() == 1);
		Assert.assertTrue(notificationsDTO.get(0).getId() == 1);
		Assert.assertTrue(notificationsDTO.get(0).getSender_name() == notifications.get(0).getSender().getUsername());
		
	}
	
	@Test
	void getNotificationsByUserFalse() {
		//Arrange
		UserEntity user1 = new UserEntity();
		user1.setId(1);
		user1.setUsername("henk");
		UserEntity user2 = new UserEntity();
		user1.setId(2);
		
		List<NotificationEntity> notifications = new ArrayList<NotificationEntity>();
		notifications.add(new NotificationEntity(0,user2,user1,NotificationType.FRIENDREQUEST)); //should not be in outcome
		when(notificationsRepository.getByRecipient_id(2)).thenReturn(notifications.stream()
						.filter(not -> not.getRecipient().getId() == 2)
						.collect(Collectors.toList()));
		
		//Act
		List<NotificationReadDTO> notificationsDTO = notificationsService.getByUser(2);
		
		//Assert	
		Assert.assertFalse(notificationsDTO.size() == 0);
		
	}
	

	


}
