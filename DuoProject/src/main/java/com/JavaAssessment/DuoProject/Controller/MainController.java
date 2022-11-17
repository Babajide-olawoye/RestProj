package com.JavaAssessment.DuoProject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.JavaAssessment.DuoProject.Service.UserInfoService;
import com.JavaAssessment.DuoProject.model.UserInfo;

@RestController
@CrossOrigin
@RequestMapping(path="/api")
public class MainController {
	
	UserInfoService service;
	
	@Autowired
	public MainController(UserInfoService service) {
		this.service = service;
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public String getRandome() {
		return "Hello";
	}
	
	@RequestMapping(value ="/all", method=RequestMethod.GET)
	public List<UserInfo> getAllInfo() {
		return service.getAllInfo();
	}
	
	@RequestMapping(value= "/new/Info", method=RequestMethod.POST)
	public void saveNewInfo(@RequestBody UserInfo newInfo) {
		service.postInfo(newInfo);
	}
	
	
}
