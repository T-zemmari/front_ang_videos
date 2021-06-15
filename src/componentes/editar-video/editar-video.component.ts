import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service.';
import { VideoService } from 'src/app/Services/video.service';
import {Video} from '../../Models/Video';
import { Router,ActivatedRoute,Params } from '@angular/router';


@Component({
  selector: 'app-editar-video',
  templateUrl: './editar-video.component.html',
  styleUrls: ['./editar-video.component.css'],
  providers:[VideoService,UserService]
})
export class EditarVideoComponent implements OnInit {

  public page_title: string;
  public identiy;
  public token;
  public video;
  public status;

  constructor(private _route : ActivatedRoute,
    private _router: Router,
    private _userService :UserService,
    private _videoService :VideoService) { 

      this.page_title = " Editar Mi videos Favorito"

      this.identiy= this._userService.getIdentity;
      this.token=this._userService.getToken;

    
    





    }

  ngOnInit(): void {
  }



  
  onSubmit(form){

    console.log(this.video)
    let token = this._userService.getToken();
    let identity = this._userService.getIdentity();
    let id = identity.sub
  

    this._videoService.update(token,this.video,id).subscribe(

      response => {

        if(response.status == 'Success'){
          this.status='success';
          form.reset();
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
