package com.meetastranger.api.controllers;

import java.util.List;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.meetastranger.api.dtos.FeedbackCreateDTO;
import com.meetastranger.api.dtos.FeedbackReadDTO;
import com.meetastranger.api.services.FeedbackService;
import com.meetastranger.api.util.JwtUtil;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class FeedbackController {

	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private FeedbackService feedbackService;

	@SuppressWarnings("unused")
	@Autowired
	private ModelMapper modelMapper;

	Logger logger = LoggerFactory.getLogger(FeedbackController.class);
		
	@RequestMapping(value="/feedback", method = RequestMethod.GET)
	public ResponseEntity<?> getAllFeedback() {
		List<FeedbackReadDTO> feedback_list = feedbackService.getAllFeedback();
		return ResponseEntity.ok(feedback_list);
	}

	@RequestMapping(value = "/feedback", method = RequestMethod.POST)
	public ResponseEntity<?> saveFeedback(@Valid @RequestBody FeedbackCreateDTO feedback,
			@RequestHeader(name = "Authorization") String token) {
		String jwt = token.substring(7);
		feedbackService.saveFeedback(Integer.parseInt(jwtUtil.extractId(jwt)), feedback);
		return ResponseEntity.ok("");

	}
	

}
