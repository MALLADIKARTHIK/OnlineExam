package com.exam.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.model.AdminDetails;
import com.exam.model.AdminSearchStudent;
import com.exam.model.Question;
import com.exam.model.Topic;
import com.exam.model.UserDetails;
import com.exam.repository.AdminRepository;
import com.exam.repository.QuestionRepository;
import com.exam.repository.TopicRepository;
import com.exam.repository.UserRepository;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private QuestionRepository questionRepository;
	
	@Autowired
	private TopicRepository topicRepository;
	
	@Autowired
	private UserRepository userRepository;

	public Question insert(Question add) {
		return questionRepository.save(add);
	}

	public void delete(int id) {
		// TODO Auto-generated method stub
		questionRepository.deleteById(id);
		
	}

	public List<Question> find(int course_id, int level_id) {
		// TODO Auto-generated method stub
		return questionRepository.findByCourseIdAndLevelId(course_id, level_id);

	}

	public Question getId(Integer question_id) {
		// TODO Auto-generated method stub
		return questionRepository.findById(question_id).get();
		//return null;
	}
	
//	public AdminDetails fetchUserForLogin(String email,String password) {
//		return adminRepository.findByEmailAndPassword(email, password);
//	}
	
	public void saveTopic(Topic topic)
	{
		topicRepository.save(topic);
	}
	public List<Topic> listTopic()
	{
		return topicRepository.findAll();
	}
	
	public void deleteT(Integer tid)
	{
		topicRepository.deleteById(tid);
	}
	
	@Transactional
	public List<UserDetails> searchStudents(AdminSearchStudent adminSearchStudent) {
		if(adminSearchStudent.getLevel() == 1) {
			List<UserDetails> list = userRepository.findAllUsersLevel1(adminSearchStudent.getTechnology(),
					adminSearchStudent.getState(), adminSearchStudent.getCity(), adminSearchStudent.getMarks());
			return list;
		} else if(adminSearchStudent.getLevel() == 2) {
			List<UserDetails> list = userRepository.findAllUsersLevel2(adminSearchStudent.getTechnology(), 
					adminSearchStudent.getState(), adminSearchStudent.getCity(), adminSearchStudent.getMarks());
			return list;
		} else {
			List<UserDetails> list = userRepository.findAllUsersLevel3(adminSearchStudent.getTechnology(), 
					adminSearchStudent.getState(), adminSearchStudent.getCity(), adminSearchStudent.getMarks());
			return list;
		}
	}


}
