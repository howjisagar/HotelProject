package com.hotelapp.HotelApp.helper;

public class RoomAlreadyAvailableException extends  Exception{
	
	public RoomAlreadyAvailableException() {
        super("Room id with this Room Id is already there in DB !! try with another one");
    }

    public RoomAlreadyAvailableException(String msg)
    {
        super(msg);
    }

}
