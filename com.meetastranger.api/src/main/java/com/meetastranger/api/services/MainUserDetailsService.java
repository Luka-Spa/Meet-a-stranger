package com.meetastranger.api.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.meetastranger.api.MainUserDetails;
import com.meetastranger.api.dtos.RegisterCreateDTO;
import com.meetastranger.api.models.UserEntity;
import com.meetastranger.api.repositories.IUserRepository;

@Service
public class MainUserDetailsService implements UserDetailsService {
	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Autowired
	private IUserRepository userRepository;
	
	@Autowired
	ModelMapper mapper;

	@Override
	public MainUserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
		UserEntity user = userRepository.getByUsername(s);
		return new MainUserDetails(user);
	}

	public boolean saveUser(RegisterCreateDTO user) {
		user.setPassword(bcryptEncoder.encode(user.getPassword()));
		userRepository.save(mapper.map(user, UserEntity.class));
		return true;

	}

}
