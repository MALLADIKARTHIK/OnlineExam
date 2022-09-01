package com.exam.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.exam.model.UserDetails;

public interface UserRepository extends JpaRepository<UserDetails,Integer>{

	public UserDetails findUserByEmail(String email);
	
	
	public UserDetails findUserByEmailAndPassword(String email,String password);


//	public Optional<UserDetails> findById(String email);
	
	@Query("SELECT u FROM UserDetails u JOIN ViewReports r on u.user_id = r.userId where r.test_id = ?1 and u.state = ?2 and u.city = ?3 and r.level1_score >= ?4")
	public List<UserDetails> findAllUsersLevel1(int technology, String state, String city, int marks);

	@Query("SELECT u FROM UserDetails u JOIN ViewReports r on u.user_id = r.userId where r.test_id = ?1 and u.state = ?2 and u.city = ?3 and r.level2_score >= ?4")
	public List<UserDetails> findAllUsersLevel2(int technology, String state, String city, int marks);

	@Query("SELECT u FROM UserDetails u JOIN ViewReports r on u.user_id = r.userId where r.test_id = ?1 and u.state = ?2 and u.city = ?3 and r.level3_score >= ?4")
	public List<UserDetails> findAllUsersLevel3(int technology, String state, String city, int marks);

	


	
	
}
