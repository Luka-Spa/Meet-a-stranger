package com.meetastranger.api.dtos;

import com.meetastranger.api.models.NotificationType;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class NotificationCreateDTO {

	private int recipient_id;
	
	private NotificationType type;
	
}
