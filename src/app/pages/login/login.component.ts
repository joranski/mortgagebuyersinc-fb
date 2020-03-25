import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loadingIndicator = false;
  email = 'jsdiof';
  password = '';
  constructor() { }

  ngOnInit(): void {
  }

  async login(value) {
    
  }

}
