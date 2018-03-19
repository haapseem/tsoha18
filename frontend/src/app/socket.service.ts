import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  private url = 'http://localhost:5000';
  private socket;

  constructor() {
    this.socket = io();
  }

  public sendMessage(message) {
    this.socket.emit('message', message);
  }

}
