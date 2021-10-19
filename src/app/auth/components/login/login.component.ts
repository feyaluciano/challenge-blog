import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }


  login(){
    Swal.fire({
      title: 'Wellcome!',
      text: '',
      showConfirmButton: false,
      timer: 1500,
      icon:"success"
      
    }).then((result) => {
      this.router.navigate(['/posts/all']);
  });    
  }

  ngOnInit(): void {
  }

}
