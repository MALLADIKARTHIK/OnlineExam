package com.exam.model;

//import java.util.List;
//
//import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "topic")
public class Topic
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer tid;
	private String tname;
	private int tlevel;

	public Topic()
	{
		super();
	}

	public Topic(Integer tid, String tname, int tlevel)
	{
		super();
		this.tid = tid;
		this.tname = tname;
		this.tlevel = tlevel;
	}

	public Integer getTid()
	{
		return tid;
	}

	public void setTid(Integer tid)
	{
		this.tid = tid;
	}

	public String getTname()
	{
		return tname;
	}

	public void setTname(String tname)
	{
		this.tname = tname;
	}

	public int getTlevel()
	{
		return tlevel;
	}

	public void setTlevel(int tlevel)
	{
		this.tlevel = tlevel;
	}

	@Override
	public String toString()
	{
		return "Topic [tid=" + tid + ", tname=" + tname + ", tlevel=" + tlevel + "]";
	}

}
