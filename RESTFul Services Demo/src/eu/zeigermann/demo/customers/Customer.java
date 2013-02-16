package eu.zeigermann.demo.customers;

import java.io.Serializable;

@SuppressWarnings("serial")
public class Customer implements Serializable {
	public int id;
	public String name;
	public int age;
	public String gender;

	public Customer() {
		
	}
	
	public Customer(int id, String name, int age, String gender) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.gender = gender;
	}

}
