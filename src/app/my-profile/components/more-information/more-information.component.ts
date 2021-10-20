import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/User';

@Component({
  selector: 'app-more-information',
  templateUrl: './more-information.component.html',
  styleUrls: ['./more-information.component.css']
})
export class MoreInformationComponent implements OnInit {
  @Input() user:User;
  constructor() { }

  ngOnInit() {
  }

}
