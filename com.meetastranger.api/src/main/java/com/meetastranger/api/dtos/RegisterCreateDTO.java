package com.meetastranger.api.dtos;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterCreateDTO {
	
	@NotBlank(message = "username is mandatory")
	private String username;
	@NotBlank(message = "password is mandatory")
	private String password;
	@Email(message = "Email should be valid")
	private String email;
	
}
