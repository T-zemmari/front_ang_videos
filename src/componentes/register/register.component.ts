import { Component, OnInit } from '@angular/core';
import { User} from '../../Models/User';
import {NgForm} from '@angular/forms';
import { UserService} from '../../app/Services/user.service.';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {


   public page_title :string;
   public user :User;
   public status :string
 


     constructor(   private _userService:UserService) {

    

    this.page_title="Registro";
    this.user = new User(1,"","","","","ROLE_USER","");
    
    
   }
   onSubmit(form) {

    this._userService.register(this.user).subscribe(


      response =>{

        if(response.Status == 'Success'){
            this.status= 'Success';
            form.reset();

        }else{
          this.status = 'error';
        }

      },

      error =>{
        this.status = 'error';
        console.log(error)
      }
    )

  }



   

  ngOnInit(): void {

    console.log(this.user);
    console.log(this._userService.prueba)
  }

}
