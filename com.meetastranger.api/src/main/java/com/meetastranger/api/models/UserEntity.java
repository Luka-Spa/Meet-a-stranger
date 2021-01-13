package com.meetastranger.api.models;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class UserEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(nullable = false)
	private String username;
	@Column(nullable = false)
	private String password;
	@Column(nullable = false)
	private String email;
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "friends", joinColumns = { @JoinColumn(name = "following_id") }, inverseJoinColumns = {
			@JoinColumn(name = "follower_id") })
	private Set<UserEntity> followers = new HashSet<UserEntity>();
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "friends", joinColumns = { @JoinColumn(name = "follower_id") }, inverseJoinColumns = {
			@JoinColumn(name = "following_id") })
	private Set<UserEntity> following = new HashSet<UserEntity>();
	
	public String getUsername() {
		return username;
	}
	
	public String getPassword() {
		return password;
	}
	
	public String getEmail() {
		return email;
	}

	public Set<UserEntity> getFollowers() {
		return followers;
	}
	
	public Set<UserEntity> getFollowing(){
		return following;
	}

	public int getId() {
		return id;
	}

	public void setPassword(String password) {
		this.password = password;
		
	}




}
