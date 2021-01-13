package com.meetastranger.api.dtos;


public class AuthenticationResponse {
	
	private final String jwt;
	private final String username;
	
	public AuthenticationResponse(String jwt, String username) {
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
