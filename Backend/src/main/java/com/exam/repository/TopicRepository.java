package com.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.model.Topic;

public interface TopicRepository extends JpaRepository<Topic, Integer>{

}
