package com.meet.a.stranger.RestAPI.models;

import lombok.Data;

@Data
public class FriendModel {

	public FriendModel(int id, String username) {
		this.id = id;
		this.name = username;
	}
	private int id;
	private String name;
}
