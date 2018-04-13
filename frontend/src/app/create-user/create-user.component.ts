import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

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
          let aswr = this.socketService.getAnswer();
          console.log(aswr);
          if(aswr["command"]=="status"){
            clearInterval(timerId);
            if(aswr["data"]=="ok"){
              alert("user created");
              this.username = "";
              this.name = "";
              this.email = "";
              this.password = "";
            }else{
              alert("User or email already exists " + aswr["data"]);
            }
          }
        }else{
          console.log("waiting...");
        }
      }, 100);
      setTimeout(() => {
        clearInterval(timerId);
        alert('timeouted query');
      }, 5000);
    }

  ngOnInit() {
  }

}
