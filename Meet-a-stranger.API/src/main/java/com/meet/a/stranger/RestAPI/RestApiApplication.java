package com.meet.a.stranger.RestAPI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class RestApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestApiApplication.class, args);
	}

}
