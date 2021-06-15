import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { UserService } from 'src/app/Services/user.service.';
import { VideoService } from 'src/app/Services/video.service';
import {Video} from '../../Models/Video';




@Component({
  selector: 'app-guardar-videos',
  templateUrl: './guardar-videos.component.html',
  styleUrls: ['./guardar-videos.component.css'],
  providers:[VideoService,UserService]

})
export class GuardarVideosComponent implements OnInit {


  public page_title: string;
  public identiy;
  public token;
  public video;
  public status;
 

  constructor(
    private _route : ActivatedRoute,
    private _router: Router,
    private _userService :UserService,
    private _videoService :VideoService
  ) {

    this.page_title = " Guardar Mis videos Favoritos"

    this.identiy= this._userService.getIdentity();
    this.token=this._userService.getToken();
  

  
  }

  ngOnInit(){

    this.video = new Video(1,this.identiy.sub,"","","","",null,null);


  }

  onSubmit(form){

    console.log(this.video)
    

    this._videoService.guardar(this.token,this.video).subscribe(

      response => {

        if(response.status == 'Success'){
          this.status='success';
        
          console.log(response)
        }else{
          this.status='error',
          console.log(response)
        }
      },
      error =>{
        this.status ='error';
        


      }
    )



    
  }


   

}
