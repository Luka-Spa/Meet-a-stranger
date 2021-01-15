package com.meetastranger.api.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meetastranger.api.dtos.NotificationCreateDTO;
import com.meetastranger.api.dtos.NotificationReadDTO;
import com.meetastranger.api.models.NotificationEntity;
import com.meetastranger.api.models.NotificationType;
import com.meetastranger.api.models.UserEntity;
import com.meetastranger.api.repositories.INotificationsRepository;
import com.meetastranger.api.repositories.IUserRepository;

@Service
public class NotificationsService {

	@Autowired
	INotificationsRepository notificationsRepository;
	
	@Autowired
	IUserRepository userRepository;
	
	@Autowired
	ModelMapper mapper;
	
	public List<NotificationReadDTO> getByUser(int userId){
		List<NotificationEntity> notifications = notificationsRepository.getByRecipient_id(userId);
		List<NotificationReadDTO> notifications_dto = new ArrayList<NotificationReadDTO>();
 		if(notifications != null) {
			notifications.forEach(notification ->{
				notifications_dto.add(
						new NotificationReadDTO(notification.getId(), 
												notification.getSender().getUsername(), 
												notification.getType()));
			});
		}
			return notifications_dto;
	}
	
	public boolean saveNotification(int userId, NotificationCreateDTO notification) {
		if(userId != notification.getRecipient_id()) {
			NotificationEntity notification_entity = new NotificationEntity();
			Optional<UserEntity> sender = userRepository.findById(userId);
			Optional<UserEntity> recipient = userRepository.findById(notification.getRecipient_id());
			if(sender.isPresent() && recipient.isPresent()) {
				notification_entity.setRecipient(recipient.get());
				notification_entity.setSender(sender.get());
				notification_entity.setType(NotificationType.values()[notification.getType()]);
				notificationsRepository.save(notification_entity);
				return true;
			}
		}
		return false;
		
	}
}
