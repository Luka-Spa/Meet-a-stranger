package com.meetastranger.api.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meetastranger.api.dtos.FeedbackCreateDTO;
import com.meetastranger.api.dtos.FeedbackReadDTO;
import com.meetastranger.api.models.FeedbackEntity;
import com.meetastranger.api.repositories.IFeedbackRepository;
import com.meetastranger.api.repositories.IUserRepository;

@Service
public class FeedbackService {

	@Autowired
	IFeedbackRepository feedbackRepository;
	
	@Autowired
	IUserRepository userRepository;
	
	@Autowired
	ModelMapper mapper;
	
	public List<FeedbackReadDTO> getAllFeedback(){
		List<FeedbackEntity> feedback_list = feedbackRepository.findAll();
		List<FeedbackReadDTO> feedback_mapped_list = new ArrayList<FeedbackReadDTO>();
		feedback_list.forEach(feedback -> {
			feedback_mapped_list.add(
					new FeedbackReadDTO(feedback.getFrom_user().getId(),
										feedback.getFrom_user().getUsername(),
										feedback.getContent(),
										feedback.getDate()));
		});
		return feedback_mapped_list;
	}
	
	public boolean saveFeedback(int userId, FeedbackCreateDTO feedback) {
		FeedbackEntity feedback_entity = new FeedbackEntity();
		var user = userRepository.findById(userId);
		if(user.isPresent() && feedback != null) {
			feedback_entity.setFrom_user(user.get());
			feedback_entity.setContent(feedback.getContent());
			feedback_entity.setDate(new Date());
			feedbackRepository.save(feedback_entity);
			return true;
		}
		return false;
		
	}
}
