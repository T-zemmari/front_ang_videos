import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { UserService } from 'src/app/Services/user.service.';
import {Video} from '../../Models/Video';




@Component({
  selector: 'app-guardar-videos',
  templateUrl: './guardar-videos.component.html',
  styleUrls: ['./guardar-videos.component.css'],
  providers:[UserService]

})
export class GuardarVideosComponent implements OnInit {


  public page_title: string;
  public identiy;
  public token;
  public video;

  constructor(
    private _route : ActivatedRoute,
    private _router: Router,
    private _userService :UserService
  ) {

    this.page_title = " Guardar Mis videos Favoritos"

    this.identiy= this._userService.getIdentity;
    this.token=this._userService.getToken;
  

  
  }

  ngOnInit(){

    this.video = new Video(1,this.identiy.sub,"","","","","");


  }

  onSubmit(form){

    
  }


   

}
