import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../Models/User';
import { global } from './global';

@Injectable()

export class UserService {

    public url: string;
    public identity;
    public token;

    constructor(
        public _http: HttpClient
    ) {
        this.url = global.url;
    }

    prueba() {
        return "Hola ya estamos aqui";
    }
    register(user): Observable<any> {

        let json = JSON.stringify(user);
        let params = 'json=' + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url + "register", params, { headers: headers });
    }

    login(user,getToken = null):Observable<any>{

        if(getToken !=null){

            user.getToken = 'true';
        }

        let json = JSON.stringify(user);
        let params = 'json=' + json;   

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    
        return this._http.post(this.url + "login", params, { headers: headers });
    
    }
    update(token , user): Observable<any> {

        let json = JSON.stringify(user);
        let params = 'json=' + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Autorization',token);

        return this._http.put(this.url + "user/update", params, { headers: headers });
    }

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));
        if(identity && identity != 'undefined'){

            this.identity= identity;
        }else{
            this.identity = null;
        }
        
        return this.identity;
    }

    getToken(){
        let token =localStorage.getItem('token');
        if(token && token != 'undefined'){

            this.token= token;
        }else{
            this.token = null;
        }
        
        return this.token;
    }

   


        
             
    
}
