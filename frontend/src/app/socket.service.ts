import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  private url = 'http://localhost:5000';
  private socket;

  constructor() {
    if(window.location.port=="4200"){
      this.socket = io("http://127.0.0.1:5000/");
    }else if(window.location.port=="5000"){
      this.socket = io("http://127.0.0.1:5000/");
    }else{
      this.socket = io("https://tsoha-harkka.herokuapp.com/");
    }
    console.log(window.location.port);

    this.socket.on('connect', () => {
      console.log("connected");
    });

    this.socket.on('message', (data) => {
      console.log("got message");
      console.log(data);
    });
  }

  public sendMessage(message) {
    console.log(message);
    this.socket.emit('message', message);
  }

}
