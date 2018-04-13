import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-viikko2',
  templateUrl: './viikko2.component.html',
  styleUrls: ['./viikko2.component.css']
})
export class Viikko2Component implements OnInit {

  username:any;
  password:any;

  constructor(private socketService: SocketService){
    // console.log("sending");
    // this.socketService.sendMessage("hello server");
	}

  click(){
    // this.socketService.sendMessage("hello server");
    // alert(this.username + " " + this.password);
  }

  ngOnInit() {
  }

}
