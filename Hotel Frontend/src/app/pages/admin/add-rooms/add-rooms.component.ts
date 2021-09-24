import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.css']
})
export class AddRoomsComponent implements OnInit {

  room = {
    roomId: '',
    roomTitle: '',
    roomDescription: '',
    roomPrice: '',
  };

  constructor(private _room: RoomService, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit() {

    if ( this.room.roomId == null) {
      alert(" Field is Empty.");
      return;
    }
    if (this.room.roomTitle.trim() == '' || this.room.roomTitle == null) {
      alert(" Title is Empty.");
      return;
    }
    if (this.room.roomDescription.trim() == '' || this.room.roomDescription == null) {
      alert(" Description is Empty.");
      return;
    }
    if ( this.room.roomPrice == null) {
      alert(" price is Empty.");
      return;
    }


    this._room.addRooms(this.room).subscribe(
      (data) => {
        this.room.roomId = '';
        this.room.roomTitle = '';
        this.room.roomDescription = '';
        this.room.roomPrice = '';
        alert("Room Added successfully.");
        this.router.navigate(['dashboard']);
      },
      (error) => {
        console.log(error);
        alert("Error in adding.");
      }
    );
  }

}
