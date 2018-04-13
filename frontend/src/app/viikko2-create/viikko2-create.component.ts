import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-viikko2-create',
  templateUrl: './viikko2-create.component.html',
  styleUrls: ['./viikko2-create.component.css']
})
export class Viikko2CreateComponent implements OnInit {

    username:any;
    name:any;
    email:any;
    password:any;

  constructor(private socketService: SocketService) { }


  click(){
    this.socketService.sendMessage(JSON
      .stringify({command: 'createUser',
        data: {
          username: this.username,
          name: this.name,
          email: this.email,
          password: this.password,
        }}));

    let timerId = setInterval(() => {
      if(this.socketService.isAnswered()){
        clearInterval(timerId);
        alert(this.socketService.getAnswer()["command"]);
        this.username = "";
      }else{
        console.log("waiting...");
      }
    }, 100);
    // setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
  }

  ngOnInit() {
  }

}
