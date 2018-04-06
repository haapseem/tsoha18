import { Component } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username:any;
  password:any;

  constructor(private socketService: SocketService){
    console.log("sending");
    this.socketService.sendMessage("hello server");
	}

  click(){
    this.socketService.sendMessage("hello server");
    alert(this.username + " " + this.password);
  }

	title = 'app';
}
