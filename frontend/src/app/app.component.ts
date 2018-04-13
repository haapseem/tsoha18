import { Component } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn: any;

  constructor(private storageService: StorageService){
    setInterval(() => {
      if(!this.storageService.getData("login"))
        this.loggedIn = false;
      else
        this.loggedIn = true;
      }, 100);
  }

  logout(){
    this.storageService.clear();
  }

	title = 'app';
}
