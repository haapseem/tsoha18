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
            let result = this.socketService.getAnswer();
            console.log(result);
            if(result["command"]=="status"){
              clearInterval(timerId);
              if(result["data"]=="ok"){
                alert("user logged in");
                this.storageService.save("login", result["data2"]);
                this.username = "";
                this.password = "";

                window.location.href = "/";
              }else{
                alert("login failed");
              }
            }
          }else{
            console.log("waiting...");
          }
        }, 100);

        setTimeout(() => {
          clearInterval(timerId);
        }, 1000);
      }

  ngOnInit() {
  }

}
