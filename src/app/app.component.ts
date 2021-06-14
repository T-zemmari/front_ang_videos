import { Component , OnInit , DoCheck } from '@angular/core';
import { UserService } from './Services/user.service.';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit{
  title = 'vang';

  public identity;
  public token;


  constructor(
    private _userService : UserService
  ){

  }



  ngOnInit(){

   



  }

  ngDoCheck(){
    this.loadService();

  }


  loadService(){

    this.identity= this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
}
