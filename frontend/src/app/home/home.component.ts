import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName: any = "";
  show = false;

  getUserName(){
    return this.userName;
  }

  constructor(private storageService: StorageService) {
    this.checkStatus();
    setInterval(() => {
      this.checkStatus();
    }, 1000);
  }

  checkStatus(){
    if(!this.storageService.getData("login")){
      window.location.href = "/login";
    }else{
      this.userName = JSON.parse(this.storageService.getData("login"))["name"];
      this.show = true;
    }
  }

  ngOnInit() {
  }

}
