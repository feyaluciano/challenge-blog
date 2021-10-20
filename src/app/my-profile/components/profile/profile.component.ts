import { Component, OnInit } from '@angular/core';
import { UserStatusService } from 'src/app/auth/services/user-status.service';
import { User } from 'src/app/core/interfaces/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user:User;

  constructor(private userStatusService:UserStatusService) { }

  ngOnInit() {

    this.user=this.userStatusService.getUser();

  }

}
