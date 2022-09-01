package com.exam.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.exam.model.Question;

public interface QuestionRepository extends CrudRepository<Question, Integer>{

	List<Question> findByCourseIdAndLevelId(int course_id, int level_id);

	//List<Question> listQuestion(int course_id, int level_id);
	
//	public List<Question> findByCourseIdAndLevelId(@Param("cid") int cid,@Param("lid") int lid);

}
