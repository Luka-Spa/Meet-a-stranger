package com.meetastranger.api.dtos;


public class AuthenticationReadDTO {
	
	private final String jwt;
	private final String username;
	
	public AuthenticationReadDTO(String jwt, String username) {
		this.jwt = jwt;
		this.username = username;
	}
	public String getJwt() {
		return this.jwt;
	}
	
	public String getUsername() {
		return this.username;
	}
}
