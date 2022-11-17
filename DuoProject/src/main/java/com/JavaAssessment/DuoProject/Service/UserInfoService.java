package com.JavaAssessment.DuoProject.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JavaAssessment.DuoProject.model.UserInfo;
import com.JavaAssessment.DuoProject.repository.UserInfoRepo;

@Service
public class UserInfoService {

	UserInfoRepo repository;
	
	@Autowired
	public UserInfoService(UserInfoRepo repository) {
		this.repository = repository;
	}
	
	public List<UserInfo> getAllInfo(){
		return repository.findAll();
	}
	
	public void postInfo(UserInfo userInfo) {
		repository.save(userInfo);
	}
	public void deleteInfo(Long id) {
		repository.deleteById(id);
	}
	
}
