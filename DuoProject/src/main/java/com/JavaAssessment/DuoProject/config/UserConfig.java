package com.JavaAssessment.DuoProject.config;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.JavaAssessment.DuoProject.model.UserInfo;
import com.JavaAssessment.DuoProject.repository.UserInfoRepo;

@Configuration
public class UserConfig {

	@Bean
	CommandLineRunner commandLineRunner(UserInfoRepo repository) {
		return args -> {
			UserInfo user1 = new UserInfo("Babaz", "JJ", "BABAJZ@gmail.com", 1234532);
			UserInfo user2 = new UserInfo("kIng", "Drum", "kingdrum@gmail.com", 3983283);
			UserInfo user3 = new UserInfo("piper", "String", "stringPiper@gmail.com", 93938292);
			UserInfo user4 =new UserInfo("Monkey", "D.Luffy", "monkeyLuffy@gmail.com", 12332123);
			UserInfo user5 = new UserInfo("wonder", "woman", "wonderwoman@gmail.com", 78967833);
			UserInfo user6 = new UserInfo("Super", "man", "superman@gmail.com", 12342123);
			
			UserInfo user7 = new UserInfo( "Poke", "mon", "pokemon@gmail.com", 456787654);
			
			
			repository.saveAll(
					List.of( user1, user2, user3, user4, user5, user6, user7));
					
		};
	}
}
