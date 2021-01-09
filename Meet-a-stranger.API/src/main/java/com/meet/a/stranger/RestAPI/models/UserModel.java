package com.meet.a.stranger.RestAPI.models;

import java.util.List;

import lombok.Data;

@Data
public class UserModel {
	private String username;
	private String password;
	private String email;
	private List<FriendModel> friends;

}
