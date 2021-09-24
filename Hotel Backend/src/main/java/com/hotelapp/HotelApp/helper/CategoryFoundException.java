package com.hotelapp.HotelApp.helper;

public class CategoryFoundException extends Exception{
	
	public CategoryFoundException() {
        super("Category title is already there in DB !! try with another one");
    }

    public CategoryFoundException(String msg)
    {
        super(msg);
    }

}
