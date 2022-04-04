import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLogin;
  constructor() { }

  ngOnInit() {
    this.userLogin = JSON.parse(localStorage.getItem('userLogin'));
  }

}
