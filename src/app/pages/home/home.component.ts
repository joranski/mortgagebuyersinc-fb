import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: any = [{
    id: 'sdfsdfrsd',
    name: 'James',
    creation: 'sdjfiods',
    color: 'red',
  }];
  
  constructor() { }

  ngOnInit(): void {
  }

}
