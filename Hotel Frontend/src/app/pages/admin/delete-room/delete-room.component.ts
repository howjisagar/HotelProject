import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.css']
})
export class DeleteRoomComponent implements OnInit {


  constructor(
    private roomService: RoomService,
    private router: Router,
  ) { }

  roomArray: any[] = [];
  // dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  // rooms: Observable<Rooms[]>;
  // room : Rooms=new Rooms();
  // deleteMessage=false;
  // studentlist:any;
  // isupdated = false;

  ngOnInit(): void {
    // this.isupdated=false;
    // this.dtOptions = {
    //   pageLength: 6,
    //   stateSave:true,
    //   lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
    //   processing: true
    // };   
    // this.roomService.roomList().subscribe(data =>{
    // this.rooms =data;
    // this.dtTrigger.next();
    // })
   this.roomService.roomList().subscribe(data=>{
      this.roomArray = data;
      console.log(data);
      console.log(this.roomArray);
    })
  }

  deleteRooms(roomId: number) {
    this.roomService.deleteRoom(roomId)
      .subscribe(
        data => {
          console.log(data);
          
          this.roomService.roomList().subscribe(data =>{
            this.roomArray =data
            })
        },
        error => console.log(error));
  }

}
