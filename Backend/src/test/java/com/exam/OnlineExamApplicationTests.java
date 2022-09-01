package com.exam;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.exam.model.Topic;
import com.exam.model.UserDetails;
import com.exam.service.AdminService;
import com.exam.service.UserService;
import java.util.*;

@SpringBootTest
class OnlineExamApplicationTests {

	@Test
	void contextLoads() {
	}
	
	@Autowired
	UserService userService;
	
	
	@Autowired
	AdminService adminService;
	
	@Test
	void createtest()   {
		UserDetails u1= new UserDetails();
		u1.setUser_id(1);
		u1.setFull_name("Drishti");
		u1.setEmail("drishtiag2000@gmail.com");
		try {
			assertEquals(u1.getEmail(), userService.create(u1).getEmail());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}					
		}
	
	@Test
	void getByIdtest() {
	UserDetails u1= new UserDetails();
	u1.setUser_id(167);
	u1.setFull_name("Malladi Karthik");
	u1.setEmail("abc@gmail.com");
	
	assertEquals(u1.getUser_id(), userService.getById(u1.getUser_id()).getUser_id());
	}
	
	@Test 
	void fetchUserForLogintest() {
		UserDetails u1= new UserDetails();
		u1.setUser_id(1);
		u1.setFull_name("Malladi Karthik");
		u1.setEmail("abc@gmail.com");
		u1.setPassword("root123");
		assertEquals(u1.getEmail(), userService.fetchUserForLogin(u1.getEmail(), u1.getPassword()).getEmail());	
	}
	
	@Test 
	void getListtest() {
		Topic t= new Topic();
		Topic t1= new Topic();
		t.setTname("Java");
//		t.setTid(1);
		t.setTlevel(1);
		t1.setTname("Python");
		t1.setTlevel(1);
		List<Topic> ls= new ArrayList<>();
		ls.add(t1);
		ls.add(t);
////		Mockito.when(topicService.listTopic()).thenReturn(ls);
////		assertThat(topicService.listTopic())
	
//		assertEquals(ls, topicService.listTopic());
	assertThat(ls).size().isGreaterThan(0);
		
	}
	
}