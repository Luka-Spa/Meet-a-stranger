package com.meetastranger.api.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.meetastranger.api.models.NotificationEntity;

public interface INotificationsRepository extends JpaRepository<NotificationEntity, Integer> {

	List<NotificationEntity> getByRecipient_id(int recipient_id);
}
