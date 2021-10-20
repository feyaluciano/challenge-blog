import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/User';

@Component({
  selector: 'app-main-information',
  templateUrl: './main-information.component.html',
  styleUrls: ['./main-information.component.css'],
})
export class MainInformationComponent implements OnInit {
  @Input() user:User;
  constructor() { }

  ngOnInit() {
  }

}
