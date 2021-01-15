package com.meetastranger.api.dtos;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FeedbackCreateDTO {

	@NotBlank(message = "content is mandatory")
	private String content;

}
