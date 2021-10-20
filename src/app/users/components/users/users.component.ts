import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStatusService } from 'src/app/auth/services/user-status.service';
import { User } from 'src/app/core/interfaces/User';
import { UsersService } from '../../services/users.service';
import { StorageUsersService } from '../../storage/storage-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public user: User;

  public listUsers: User[] = [];

  public titleSection: string = '';

  constructor(
    private userStatusService: UserStatusService,
    private route: ActivatedRoute,
    private  storageUsersService: StorageUsersService,
    private router: Router,
    private usersService: UsersService
  ) {}

  viewDescription(id) {
    var element = document.getElementById('user' + id);
    if (element.classList.contains('collapse')) {
      element.classList.remove('collapse');
    } else {
      element.classList.add('collapse');
    }
  }

  getUsers() {
    this.listUsers = this.storageUsersService.getUsers();
    this.storageUsersService.storageUsers$.next(this.listUsers);
  }

 

  ngOnInit() {
    this.user = this.userStatusService.getUser();
    this.storageUsersService.getHandlerUsers$().subscribe((list) => {      
      this.listUsers = JSON.parse(JSON.stringify(list));
    });

    
      this.titleSection = 'These are your friends';
      this.getUsers();
    
  }
}
