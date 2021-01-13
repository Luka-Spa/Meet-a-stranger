package com.meetastranger.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.meetastranger.api.models.UserEntity;

@Repository
public interface IUserRepository extends JpaRepository<UserEntity, Integer> {

	UserEntity getByUsername(String username);
	

}
