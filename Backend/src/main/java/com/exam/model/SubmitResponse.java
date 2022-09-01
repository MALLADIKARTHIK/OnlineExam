package com.exam.model;

import javax.persistence.Entity;

public class SubmitResponse {

	private int courseId;
	private int levelId;
	private int userId;
	private int marks;
	public SubmitResponse() {
	}
	public SubmitResponse(int courseId, int levelId, int userId, int marks) {
		this.courseId = courseId;
		this.levelId = levelId;
		this.userId = userId;
		this.marks = marks;
	}
	public int getCourseId() {
		return courseId;
	}
	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}
	public int getLevelId() {
		return levelId;
	}
	public void setLevelId(int levelId) {
		this.levelId = levelId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getMarks() {
		return marks;
	}
	public void setMarks(int marks) {
		this.marks = marks;
	}
}
