package com.exam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.exam.model.AdminDetails;
import com.exam.model.AdminSearchStudent;
import com.exam.model.Question;
import com.exam.model.Topic;
import com.exam.model.UserDetails;
import com.exam.service.AdminService;

@CrossOrigin("http://localhost:4200")
@RestController
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	
	private String username="karthik@gmail.com";
	private String password="root123";
//	@PostMapping("adminLogin")
//	public AdminDetails loginUser(@RequestBody AdminDetails login) throws Exception {
//		
//		String tempEmail=login.getEmail();
//		String tempPassword=login.getPassword();
//	
//		System.out.println(tempEmail+" "+tempPassword);
//	
//		AdminDetails adminLogin=null;
//		if(tempEmail!=null && tempPassword!=null) {
//	     adminLogin=adminService.fetchUserForLogin(tempEmail, tempPassword);
//		}
//		if(adminLogin==null) {
//		throw new Exception("invalid credentials");
//		}
//		return adminLogin;
//	}
	
	@PostMapping("adminLogin")
	public Boolean loginUser(@RequestBody AdminDetails login) throws Exception {
		String email=login.getEmail();
		String pass=login.getPassword();
		if(email.equals(username) && pass.equals(password)) {
			return true;
		}
		else {
			throw new Exception("User not found");
		}
	}
	
	@PostMapping("/add")
	public Question insert(@RequestBody Question add) {
		
		return adminService.insert(add);
	}
	
	@DeleteMapping("/del/{id}")
	public void delete(@PathVariable int id) {

		adminService.delete(id);
	}
	
	@GetMapping("/questions/{course_id}/{level_id}")
	public List<Question> questionList(@PathVariable int course_id,@PathVariable int level_id){
		return adminService.find(course_id, level_id);
	}
	
	@PutMapping("/up/{question_id}")
	public Question updateAddRemEntity(@PathVariable Integer question_id,@RequestBody Question a)
	{
		Question ar=adminService.getId(question_id);
		ar.setCourse_id(a.getCourse_id());
		ar.setLevel_id(a.getLevel_id());
		ar.setQuestion(a.getQuestion());
		ar.setOption_1(a.getOption_1());
		ar.setOption_2(a.getOption_2());
		ar.setOption_3(a.getOption_3());
		ar.setOption_4(a.getOption_4());
		ar.setCorrect_option(a.getCorrect_option());
		 adminService.insert(a);
		 return ar;
	}
	
	@PostMapping("/topics")
	public void add(@RequestBody Topic topic)
	{
		adminService.saveTopic(topic);
	}
	
	@GetMapping("/alltopics")
	public List<Topic> list()
	{
		return adminService.listTopic();
	} 
	
	@DeleteMapping("/deletetopics{tid}")
	public void deleteTopic(@PathVariable Integer tid)
	{
		adminService.deleteT(tid);
	}
	
	
	@PostMapping("/search_students")
	public List<UserDetails> searchStudents(@RequestBody AdminSearchStudent adminSearchStudent) {
		List<UserDetails> list = adminService.searchStudents(adminSearchStudent);
		return list;
	}
}
