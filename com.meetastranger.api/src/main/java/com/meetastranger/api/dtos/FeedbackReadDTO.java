package com.meetastranger.api.dtos;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FeedbackReadDTO {

	private int from_id;
	private String from_username;
	private String content;
	private Date date;

}
