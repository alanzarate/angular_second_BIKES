import { Component, Input, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  user: any;
  @Input('user') userObj!: User;

  constructor() { 
    
  }

  ngOnInit(): void {


    this.user = {
      name: this.userObj.name,
      title: this.userObj.designation,
      address: this.userObj.address,
      image: this.userObj.image,
      phone: this.userObj.phone
    };
  }

}
