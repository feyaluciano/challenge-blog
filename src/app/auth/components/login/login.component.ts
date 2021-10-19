import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/User';

import Swal from'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { UserStatusService } from '../../services/user-status.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService,private userStatusService:UserStatusService) { }


  login(){
    this.authService.login(1).subscribe(usera=>{  
      const user:User=JSON.parse(JSON.stringify(usera));
      this.userStatusService.setUser(user);
      
      Swal.fire({
        title: 'Wellcome!',
        text: '',
        showConfirmButton: false,
        timer: 1500,
        icon:"success"
        
      }).then((result) => {
        this.router.navigate(['/posts/all']);
    });    


    })


    
  }

  ngOnInit(): void {
  }

}
