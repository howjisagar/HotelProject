import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { LoginService } from 'src/app/services/login.service';
import { RoomService } from 'src/app/services/room.service';
import { BookingModel } from 'src/app/services/hotel';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css']
})
export class RoomBookingComponent implements OnInit {

  rooms: any[] = [];

  status: String= "CONFIRM";

  bookingModel:BookingModel=new BookingModel()

  constructor(
    private router: Router,
    private roomService: RoomService,
    private bookingService: BookingService,
    private loginService: LoginService
  ) { }

  user_id: number = this.loginService.getUserId();

  ngOnInit(): void {
    this.roomService.roomList().subscribe(data=>{
      this.rooms = data;
    });
  }



  roomBook(roomId: number){
    console.log(roomId);
  this.bookingModel=new BookingModel()
  this.bookingModel.user_id = this.user_id;
  this.bookingModel.status = this.status;
  this.bookingModel.room_id = roomId;
  this.bookingService.addBooking(this.bookingModel.room_id,this.bookingModel.user_id,this.bookingModel)
  .subscribe(
    data => {
      alert("successfull")
      console.log(data);
      this.roomService.roomList().subscribe(data =>{
        this.rooms = data;
      }) 

    },
    (error) => {
      console.log(error);
      alert("Error in booking.");
    }
  );

  // deleteRooms(roomId: number) {
  //   this.roomService.deleteRoom(roomId)
  //     .subscribe(
  //       data => {
  //         console.log(data);
          
  //         this.roomService.roomList().subscribe(data =>{
  //           this.roomArray =data
  //           })
  //       },
  //       error => console.log(error));
  // }
  }

}
