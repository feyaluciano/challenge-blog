import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStatusService } from 'src/app/auth/services/user-status.service';
import { Albumn } from 'src/app/core/interfaces/Albumn';
import { User } from 'src/app/core/interfaces/User';
import { AlbumnsService } from '../../services/albumns.service';
import { StorageAlbumnsService } from '../../storage/storage-albumns.service';

@Component({
  selector: 'app-albumns',
  templateUrl: './albumns.component.html',
  styleUrls: ['./albumns.component.css']
})
export class AlbumnsComponent implements OnInit {

  public user:User;

  public listAlbumns:Albumn[]=[];

  public titleSection:string="";

  constructor(private userStatusService:UserStatusService,private route: ActivatedRoute,private storageAlbumnsService:StorageAlbumnsService,private router:Router,private albumnsService:AlbumnsService) { }



  viewDescription(id){    
    var element = document.getElementById('album'+id);    
    if(element.classList.contains('collapse')) {
      element.classList.remove('collapse');      
   } else {
    element.classList.add('collapse');
   }   
  }

  getAlbumns(){
    this.listAlbumns=this.storageAlbumnsService.getAlbumns();
    this.storageAlbumnsService.storageAlbumns$.next(this.listAlbumns);
  }



  getAlbumnsByUserId(userId:number){    
    this.listAlbumns=this.storageAlbumnsService.getAlbumnsByUserId(userId.toString());   
    this.storageAlbumnsService.storageAlbumns$.next(this.listAlbumns);
  }

  ngOnInit() {
    this.user=this.userStatusService.getUser();
    this.storageAlbumnsService.getHandlerAlbumns$().subscribe(list=>{                 
      this.listAlbumns=JSON.parse(JSON.stringify(list));
    });



    if (typeof this.route.snapshot.params['userId'] !== 'undefined') {      
      this.getAlbumnsByUserId(this.route.snapshot.params['userId']);
      this.titleSection="These are your photos";          
    } else {  
      this.titleSection="These are the photos of your friends";    
      this.getAlbumns();
    }



  }

}
