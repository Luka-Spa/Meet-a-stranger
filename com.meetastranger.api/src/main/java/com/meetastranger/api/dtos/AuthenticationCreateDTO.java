package com.meetastranger.api.dtos;

public class AuthenticationCreateDTO {
	
	private String username;
	private String password;
	
	public AuthenticationCreateDTO() {
		
	}
	
	public AuthenticationCreateDTO(String username, String password) {
		this.username = username;
		this.password = password;
	}
	
	public String getUsername() {
		return username;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	public void setUsername(String username) {
		this.username = username;
	}
}
