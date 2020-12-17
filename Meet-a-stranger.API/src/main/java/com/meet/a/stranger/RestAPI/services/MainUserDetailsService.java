package com.meet.a.stranger.RestAPI.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.meet.a.stranger.RestAPI.MainUserDetails;
import com.meet.a.stranger.RestAPI.models.UserEntity;
import com.meet.a.stranger.RestAPI.models.UserModel;
import com.meet.a.stranger.RestAPI.repositories.IUserRepository;

@Service
public class MainUserDetailsService implements UserDetailsService {
	@Autowired
	private PasswordEncoder bcryptEncoder;
	
	private IUserRepository userRepository;
	
	MainUserDetailsService(IUserRepository userRepository){	
		this.userRepository = userRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
		UserEntity user = userRepository.getByUsername(s);
		return new MainUserDetails(user);
	}
	
	public UserEntity saveUser(UserEntity user) {
		user.setPassword(bcryptEncoder.encode(user.getPassword()));
		return userRepository.save(user);
		
	}

}
