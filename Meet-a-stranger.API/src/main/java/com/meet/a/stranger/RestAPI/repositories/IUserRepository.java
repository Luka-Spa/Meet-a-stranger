package com.meet.a.stranger.RestAPI.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.meet.a.stranger.RestAPI.models.UserEntity;

@Repository
public interface IUserRepository extends JpaRepository<UserEntity, Integer> {
	
	UserEntity getByUsername(String username);

}
