import { Component } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private socketService: SocketService){
    this.socketService.sendMessage("hello server");
	}

	title = 'app';
}
