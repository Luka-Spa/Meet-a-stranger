package com.meetastranger.api.dtos;

import java.util.List;

import lombok.Data;

@Data
public class UserReadDTO{
	private String username;
	private String password;
	private String email;
	private List<FriendReadDTO> friends;

}
