import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

      username:any;
      password:any;

      constructor(private socketService: SocketService,
          private storageService: StorageService) { }


      click(){
        this.socketService.sendMessage(JSON
          .stringify({command: 'login',
            data: {
              username: this.username,
              password: this.password,
            }}));

        let timerId = setInterval(() => {
          if(this.socketService.isAnswered()){
            let aswr = this.socketService.getAnswer();
            console.log(aswr);
            if(aswr["command"]=="status"){
              clearInterval(timerId);
              if(aswr["data"]=="ok"){
                alert("user logged in");
                this.storageService.save("login", {
                  user: this.username
                });
                this.username = "";
                this.password = "";
              }else{
                // alert("login failed");
              }
            }
          }else{
            console.log("waiting...");
          }
        }, 100);

        setTimeout(() => {
          clearInterval(timerId);
          alert("login failed");
        }, 1000);
      }

  ngOnInit() {
  }

}
