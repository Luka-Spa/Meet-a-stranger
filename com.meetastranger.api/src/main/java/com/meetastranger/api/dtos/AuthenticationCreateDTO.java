package com.meetastranger.api.dtos;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthenticationCreateDTO {
	
	@NotBlank(message = "Name is mandatory")
	private String username;
	@NotBlank(message = "Password is mandatory")
	private String password;

	
}
