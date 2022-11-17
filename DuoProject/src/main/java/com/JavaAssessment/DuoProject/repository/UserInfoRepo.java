package com.JavaAssessment.DuoProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.JavaAssessment.DuoProject.model.UserInfo;

@Repository
public interface UserInfoRepo extends JpaRepository<UserInfo, Long> {

}
