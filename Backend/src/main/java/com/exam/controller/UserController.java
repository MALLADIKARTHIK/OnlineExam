package com.exam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.exam.model.Question;
import com.exam.model.SubmitResponse;
import com.exam.model.Topic;
import com.exam.model.UserDetails;
import com.exam.model.ViewReports;
import com.exam.service.UserService;

@CrossOrigin("http://localhost:4200")
@RestController
public class UserController {
	
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private MailSender mailSender;
	
	@PostMapping("/userDetails")
	public UserDetails createEmployee(@RequestBody UserDetails user) throws Exception {
		
		return userService.create(user);}
	
	
	@GetMapping("/viewById/{id}")
	public UserDetails viewById(@PathVariable Integer id) {
		return userService.getById(id);
	}
	
	@PostMapping("login")
	public UserDetails loginUser(@RequestBody UserDetails login) throws Exception {
		String tempEmail=login.getEmail();
		String tempPassword=login.getPassword();
		UserDetails obj=null;
		
		if(tempEmail!=null && tempPassword!=null) {
			obj = userService.fetchUserForLogin(tempEmail, tempPassword);
		}
		if(obj==null) {
			throw new Exception("invalid credentials");
		}
		return obj;
	}
	
	
//	@GetMapping("/reports/{user_id}")
	
//	public List<ViewReports> getUserReports(@PathVariable int u_id) {
	
//	@GetMapping("/reports")
//	public Iterable<ViewReports> getUserReport(){
//		 return userService.generateUserReports();
//	
//	}
	
	@GetMapping("/reports/{user_id}")
	public List<ViewReports> getUserReports(@PathVariable int user_id) {
		List<ViewReports> list = userService.generateUserReports(user_id);
		return list;
	}
	
	
//	@GetMapping("testtaken/{userId}/{test_id}")
//	public String checkStatus(@PathVariable int userId,@PathVariable int test_id) {
//		
//	}
	
	
//	@PostMapping("/topics")
//	public void add(@RequestBody Topic topic)
//	{
//		userService.saveTopic(topic);
//	}
//	
//	@GetMapping("/alltopics")
//	public List<Topic> list()
//	{
//		return userService.listTopic();
//	} 
//	
//	@DeleteMapping("/deletetopics{tid}")
//	public void deleteTopic(@PathVariable Integer tid)
//	{
//		userService.delete(tid);
//	}
	
	
	
//	@GetMapping("/questions/{course_id}/{level_id}")
//	public List<Question> questionList(@PathVariable("course_id") int course_id,@PathVariable("level_id") int level_id){
//		return userService.find(course_id, level_id);
//	}
	
//	@PostMapping("/add")
//	public Question insert(@RequestBody Question add) {
//		
//		return userService.insert(add);
//	}
	
	
	
	@PostMapping("/submit_answers")
	public String getUserResponse(@RequestBody SubmitResponse submitResponse) {
		userService.savingMarks(submitResponse);
		if(submitResponse.getLevelId() == 1 && submitResponse.getMarks() >= 50) {
			return "Pass";
		} else if(submitResponse.getLevelId() == 2 && submitResponse.getMarks() >= 10) {
			return "Pass";
		} else if(submitResponse.getLevelId() == 3 && submitResponse.getMarks() >= 10) {
			return "Pass";
		} else {
			return "Fail";
		}
	}
	
	@PostMapping("/reset_password")
	public String resetPassword(@RequestBody UserDetails al) {
		try {
			String email = al.getEmail();
			String newPsw = al.getPassword();
			UserDetails a = userService.resetPassword(email, newPsw);
			return "Password Changed Successfully";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "Password Not Modified";
	}
	
	
	@GetMapping("/forgot_password/{email}")
	public String forgotPassword(@PathVariable String email) {
		System.out.println(email);
		SimpleMailMessage message = new SimpleMailMessage();
		
		message.setFrom("drishtiag2000@gmail.com");
		message.setTo(email);
		message.setSubject("Password Reset");
		message.setText("Need to reset your password? No Problem!\nClick on the link below and you will be on your way!\nhttp://localhost:4200/forget_password\nIf you did not make this request please ignore this email!");
		mailSender.send(message);
		
		return "Mail Send Successfully";
	}



}
