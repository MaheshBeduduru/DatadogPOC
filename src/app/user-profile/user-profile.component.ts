import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor() {
    let userActions = ['action1', 'action2', 'action3'];
  }

  ngOnInit(): void {}
}
