import { Component, OnInit } from '@angular/core';
import { UserStatusService } from 'src/app/auth/services/user-status.service';
import { User } from 'src/app/core/interfaces/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user:User; 
  constructor(private userStatusService:UserStatusService) { }

  ngOnInit(): void {
    this.user=this.userStatusService.getUser();
  }

}
