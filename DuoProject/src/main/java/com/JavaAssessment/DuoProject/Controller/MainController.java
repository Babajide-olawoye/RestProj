package com.JavaAssessment.DuoProject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.JavaAssessment.DuoProject.Service.UserInfoService;
import com.JavaAssessment.DuoProject.model.UserInfo;

@Controller
@CrossOrigin
@RequestMapping()
public class MainController {
	@Autowired
	UserInfoService service;
	
	public MainController(UserInfoService service) {
		this.service = service;
	}
	
	@RequestMapping(value ="/all", method=RequestMethod.GET)
	public List<UserInfo> getAllInfo() {
		return service.getAllInfo();
	}
	
	
}
