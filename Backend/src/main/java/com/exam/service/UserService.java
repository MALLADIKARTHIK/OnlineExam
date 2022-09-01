package com.exam.service;

//import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import com.exam.exception.UserException;
import com.exam.model.Question;
import com.exam.model.SubmitResponse;
import com.exam.model.Topic;
import com.exam.model.UserDetails;
//import com.exam.model.UserResponse;
import com.exam.model.ViewReports;
import com.exam.repository.QuestionRepository;
import com.exam.repository.ReportRepository;
import com.exam.repository.TopicRepository;
import com.exam.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ReportRepository reportRepository;
	
	@Autowired
	private TopicRepository topicRepository;
	
	@Autowired
	QuestionRepository questionrepository;
	
	//@Autowired
	//private SubmitResponseRepository submitReponseRepository;
	
	@Autowired
	private MailSender mailSender;
	
	
	
	public UserDetails create(UserDetails user) throws Exception{
		UserDetails u1=userRepository.findUserByEmail(user.getEmail());
		
		if(u1!=null) {
			System.out.println("User alreadu exists !!!");
			throw new UserException("User already exits !!!");
		} 
		//else {
		//if(u1==null) {
		return userRepository.save(user);
		//}
	}
	

	public UserDetails getById(Integer id) {
		return userRepository.findById(id).get();
	}
	
	public UserDetails fetchUserForLogin(String email,String password) {
		return userRepository.findUserByEmailAndPassword(email, password);
	}
	
//	@Transactional
//	public List<ViewReports> generateUserReports() {
//		 List<ViewReports> list = new ArrayList<ViewReports>();
////		List<ViewReports> list = reportRepository.findAll();
//		 reportRepository.findAll().forEach(ViewReports->list.add(ViewReports));
//		return list;
//	}

//	@Transactional
//	public Iterable<ViewReports> generateUserReports() {
//		return reportRepository.findAll();
//	}

	@Transactional
	public List<ViewReports> generateUserReports(int user_id) {
		List<ViewReports> list = reportRepository.findAllByUserId(user_id);
		return list;
	}
	
	
	
//	public void saveTopic(Topic topic)
//	{
//		topicRepository.save(topic);
//	}
//	public List<Topic> listTopic()
//	{
//		return topicRepository.findAll();
//	}
//	
//	public void delete(Integer tid)
//	{
//		topicRepository.deleteById(tid);
//	}
	
	
	
	
	public List<Question> find(int course_id, int level_id) {
		List<Question> q = questionrepository.findByCourseIdAndLevelId(course_id, level_id);
		return q;
	}
	
//	public Question insert(Question add) {
//		return questionrepository.save(add);
//	}

	ViewReports viewReports=new ViewReports();
	public void savingMarks(SubmitResponse submitResponse) {
		// TODO Auto-generated method stub
		//submitReponseRepository.save(submitResponse);
		viewReports.setUser_id(submitResponse.getUserId());
		viewReports.setTest_id(submitResponse.getCourseId());
		if(submitResponse.getLevelId() == 1) {
			viewReports.setLevel1_score(submitResponse.getMarks());
		}
		else if(submitResponse.getLevelId() == 2) {
			viewReports.setLevel2_score(submitResponse.getMarks());
		}
		else{
			viewReports.setLevel3_score(submitResponse.getMarks());
		}
		
		reportRepository.save(viewReports);
		
	}


	public UserDetails resetPassword(String email, String newPsw) throws UserException{
		UserDetails findAdmin = userRepository.findUserByEmail(email);
		UserDetails a = null;
		
		if(findAdmin!=null) {
//		if (findAdmin.isPresent()) {
//			a = findAdmin.get();
			a=findAdmin;
			a.setPassword(newPsw);
			userRepository.save(a);
		} else {
			throw new UserException("Admin Not Found");
		}
		
		return a;
		
	}
	
	
	
	public void forgetPassword(String email) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("drishtiag2000@gmail.com");
		message.setTo("18211a05f0@bvrit.ac.in");
		message.setSubject("Test Mail");
		message.setText("Hi Hi Hi");
		mailSender.send(message);
	}
	
	
	
}
