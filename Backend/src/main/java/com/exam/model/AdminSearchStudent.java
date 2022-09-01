package com.exam.model;

public class AdminSearchStudent {

	private int technology;
	private String state;
	private String city;
	private int level;
	private int marks;
	public AdminSearchStudent() {
	}
	public AdminSearchStudent(int technology, String state, String city, int level, int marks) {
		this.technology = technology;
		this.state = state;
		this.city = city;
		this.level = level;
		this.marks = marks;
	}
	public int getTechnology() {
		return technology;
	}
	public void setTechnology(int technology) {
		this.technology = technology;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getLevel() {
		return level;
	}
	public void setLevel(int level) {
		this.level = level;
	}
	public int getMarks() {
		return marks;
	}
	public void setMarks(int marks) {
		this.marks = marks;
	}
}
