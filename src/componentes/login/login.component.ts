import { Component, OnInit } from '@angular/core';
import { User} from '../../Models/User';
import {NgForm} from '@angular/forms';
import { UserService} from '../../app/Services/user.service.';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {


  public page_title: string;
  public status :string;
  public user :User;
  constructor(
    private _userService:UserService
  ) {
    this.page_title="Identificate";
    this.user = new User(1,"","","","","ROLE_USER","");
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    this._userService.login(this.user).subscribe(

      response => {

      console.log(response)
      if(!response.Status || response.Status != 'Error'){

        this.status= 'Success';
        this.user = response;
        console.log(this.user)
        form.reset();
      }else{
        this.status = 'error';
      }

      },
      error => {

        this.status = 'error';
        console.log(error)
      }
    )
  }

}
