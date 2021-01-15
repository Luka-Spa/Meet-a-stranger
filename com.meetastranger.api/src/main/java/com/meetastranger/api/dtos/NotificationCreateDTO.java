package com.meetastranger.api.dtos;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class NotificationCreateDTO {

	@NotNull(message="recipient_id can't be null")
	private int recipient_id;
	
	@Min(0)
	@Max(2)
	@NotNull
	private int type;
	
}
