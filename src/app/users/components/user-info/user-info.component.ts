import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/core/interfaces/User';
import { ModalUserComponent } from 'src/app/my-profile/components/modal-user/modal-user.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  public user:User;

  @Input() userId:string;

  constructor(private modalService: NgbModal,private usersService:UsersService ) { 

  }

  showModalUser(userId:string){
      this.usersService.getUserById(this.userId).subscribe(user=>{
      this.user=JSON.parse(JSON.stringify(user));
      const modalRef = this.modalService.open(ModalUserComponent,{windowClass: 'animate__animated animate__bounceInDown',size: 'lg'});
      modalRef.componentInstance.user =this.user;
    })

    
  }

  ngOnInit() {
   


  }

}
