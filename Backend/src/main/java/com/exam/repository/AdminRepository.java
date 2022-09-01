package com.exam.repository;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;

import com.exam.model.AdminDetails;
//import com.exam.model.UserDetails;
//public interface AdminRepository extends JpaRepository<AdminDetails,String>{
public interface AdminRepository extends JpaRepository<AdminDetails,Integer>{


	//public AdminDetails findByEmailAndPassword(String email, String password);
	
	
}
