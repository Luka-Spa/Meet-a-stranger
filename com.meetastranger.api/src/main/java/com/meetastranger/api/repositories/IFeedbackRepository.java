package com.meetastranger.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.meetastranger.api.models.FeedbackEntity;

public interface IFeedbackRepository extends JpaRepository<FeedbackEntity, Integer> {

}
