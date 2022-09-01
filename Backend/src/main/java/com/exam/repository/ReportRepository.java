package com.exam.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.exam.model.ViewReports;

public interface ReportRepository extends CrudRepository<ViewReports,Integer>{

	public List<ViewReports> findAllByUserId(int user_id);
	
	//public void findByuserIdAndTest_id(int userId,int test_id);
	
//	@Query("select e from reports1 e where e.test_id=:cid and e.userId=:uid")
//	public ViewReports viewReport(@Param("cid") int cid,@Param("uid") int uid);
}
