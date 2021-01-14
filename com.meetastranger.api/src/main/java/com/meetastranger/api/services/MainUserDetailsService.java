package com.meetastranger.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.meetastranger.api.MainUserDetails;
import com.meetastranger.api.models.UserEntity;
import com.meetastranger.api.repositories.IUserRepository;

@Service
public class MainUserDetailsService implements UserDetailsService {
	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Autowired
	private IUserRepository userRepository;

	@Override
	public MainUserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
		UserEntity user = userRepository.getByUsername(s);
		return new MainUserDetails(user);
	}

	public UserEntity saveUser(UserEntity user) {
		user.setPassword(bcryptEncoder.encode(user.getPassword()));
		return userRepository.save(user);

	}

}
