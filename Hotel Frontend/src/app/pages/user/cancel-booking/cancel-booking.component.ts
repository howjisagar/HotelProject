import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { LoginService } from 'src/app/services/login.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {

  bookingList: any;
   
  constructor(private http: HttpClient,
    private router: Router,
    private booking: BookingService,
    private loginService: LoginService,
    private roomService: RoomService) { }

    user:number = this.loginService.getUserId();

  ngOnInit(): void {
    this.booking.getBookingList(this.user).subscribe(data =>{
      console.log(data);
      this.bookingList = data;
    }) 
  }

  cancelBooking(booking_id:number):void{
    this.booking.cancelCurrentBooking(booking_id).subscribe(data =>{
      alert("Deleted successfully")
      this.booking.getBookingList(this.user).subscribe(data =>{
        this.bookingList = data;
      })
    });
  }
    
}
