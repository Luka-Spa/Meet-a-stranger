package com.meetastranger.api.dtos;

import com.meetastranger.api.models.NotificationType;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class NotificationReadDTO {

	private int id;
	
	private String sender_name;
	
	private NotificationType type;
	
}
