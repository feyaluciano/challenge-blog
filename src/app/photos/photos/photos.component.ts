import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStatusService } from 'src/app/auth/services/user-status.service';
import { Albumn } from 'src/app/core/interfaces/Albumn';
import { Photo } from 'src/app/core/interfaces/Photo';
import { User } from 'src/app/core/interfaces/User';
import Swal from 'sweetalert2';
import { StoragePhotosService } from '../storage/storage-photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  public titleSection:string="Photos";

  public user:User;

  public listPhotos:Photo[]=[];

  public listArray:Photo[]=[];
  public positionCurrent:number=0;
  public cantPhotos:number=6


  

  


  constructor(
    private storagePhotosService: StoragePhotosService,
    private userStatusService: UserStatusService,
    private route: ActivatedRoute,    
    private router: Router,   
  ) {}



  getPhotos() {
    this.listPhotos = this.storagePhotosService.getPhotos();
    this.storagePhotosService.storagePhotos$.next(this.listPhotos);
  }

  getPhotosByAlbumId(albumId: number) {
    this.listPhotos = this.storagePhotosService.getPhotosByAlbumId(
      albumId.toString()
    );
    this.storagePhotosService.storagePhotos$.next(this.listPhotos);
  }

  

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {  
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {    
    this.addItems(this.positionCurrent,this.cantPhotos);
  }
}


viewPhoto(url){
//alert(url)

 

Swal.fire({
  html:   
    '<img class="img-fluid" src="'+url+'"></img> ',     
    heightAuto: true,
})

}

  

addItems(currentPos,end){  
  end=currentPos+ this.cantPhotos;  
  for (let j=currentPos; j<end;j++) {
    if (this.listPhotos.length > this.listArray.length ) {
      this.listArray.push(this.listPhotos[j])
    }
  }
  this.positionCurrent=this.positionCurrent + this.cantPhotos;
}


  ngOnInit() {
    this.user = this.userStatusService.getUser();
    this.storagePhotosService.getHandlerPhotos$().subscribe((list) => {
      this.listPhotos = JSON.parse(JSON.stringify(list));
    });

    let listPhotos = this.storagePhotosService.getPhotos();
    this.storagePhotosService.storagePhotos$.next(listPhotos);


    if (typeof this.route.snapshot.params['albumId'] !== 'undefined') {
      this.getPhotosByAlbumId(this.route.snapshot.params['albumId']);
      this.titleSection = 'These are your photos';
    } else {
      this.titleSection = 'These are the photos of your friends';
      this.getPhotos();
    }

    

   this.addItems(this.positionCurrent,this.cantPhotos)
   


   

  }

}
