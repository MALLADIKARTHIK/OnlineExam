package com.exam.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="reports1")
public class ViewReports {
	
//@Id
//@GeneratedValue(strategy=GenerationType.AUTO)
//private int report_id;
@Id
private int userId;
private int test_id;
private int level1_score;
private int level2_score;
private int level3_score;
//public int getReport_id() {
//	return report_id;
//}
//public void setReport_id(int report_id) {
//	this.report_id = report_id;
//}
public int getUser_id() {
	return userId;
}
public void setUser_id(int user_id) {
	this.userId = user_id;
}
public int getTest_id() {
	return test_id;
}
public void setTest_id(int test_id) {
	this.test_id = test_id;
}

public int getLevel1_score() {
	return level1_score;
}
public void setLevel1_score(int level1_score) {
	this.level1_score = level1_score;
}
public int getLevel2_score() {
	return level2_score;
}
public void setLevel2_score(int level2_score) {
	this.level2_score = level2_score;
}
public int getLevel3_score() {
	return level3_score;
}
public void setLevel3_score(int level3_score) {
	this.level3_score = level3_score;
}
public ViewReports() {
	super();
	// TODO Auto-generated constructor stub
}





	

}
