import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(ss: StorageService) {
    setInterval(() => {
      if(!ss.getData("login")){
        window.location.href = "/login";
        window.location = "/login";
        window.location.assign = "/login";
      }
    }, 500);
  }

  ngOnInit() {
  }

}
