package com.meetastranger.api.controllers;

import java.util.List;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.meetastranger.api.dtos.FeedbackCreateDTO;
import com.meetastranger.api.dtos.FeedbackReadDTO;
import com.meetastranger.api.dtos.NotificationCreateDTO;
import com.meetastranger.api.dtos.NotificationReadDTO;
import com.meetastranger.api.services.FeedbackService;
import com.meetastranger.api.services.NotificationsService;
import com.meetastranger.api.util.JwtUtil;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class NotificationsController {

	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private NotificationsService notificationsService;

	@Autowired
	private ModelMapper modelMapper;

	Logger logger = LoggerFactory.getLogger(NotificationsController.class);
		
	@RequestMapping(value="/notifications", method = RequestMethod.GET)
	public ResponseEntity<?> getNotificationsByUser(@RequestHeader(name = "Authorization") String token) {
		String jwt = token.substring(7);
		List<NotificationReadDTO> notifications = notificationsService.getByUser(Integer.parseInt(jwtUtil.extractId(jwt)));
		return ResponseEntity.ok(notifications);
	}

	@RequestMapping(value = "/notifications", method = RequestMethod.POST)
	public ResponseEntity<?> createNofication(@Valid @RequestBody NotificationCreateDTO notification,
			@RequestHeader(name = "Authorization") String token) {
		String jwt = token.substring(7);
		if(notificationsService.saveNotification(Integer.parseInt(jwtUtil.extractId(jwt)), notification)) {
			return ResponseEntity.ok("");
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("");
	}
}
