package com.meet.a.stranger.RestAPI.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.meet.a.stranger.RestAPI.models.entities.UserEntity;


@Repository
public interface IFriendsRepository extends JpaRepository<UserEntity, Integer> {
	
	List<UserEntity> getById(int id);

}
