import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../../Models/Video';
import { global } from './global';

@Injectable()

export class VideoService {

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
    guardar(token,video): Observable<any> {

        let json = JSON.stringify(video);
        let params = 'json=' + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Autorization',token);

        return this._http.post(this.url + "video/new", params, { headers: headers });
    }

    update(token , video , id): Observable<any> {

        let json = JSON.stringify(video);
        let params = 'json=' + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Autorization',token);

        return this._http.put(this.url + "video/update/"+id , params, { headers: headers });
    }

    getVideo(token,id):Observable<any>{

      

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Autorization',token);

        return this._http.get(this.url + "video/detail/"+id,{ headers: headers });
    }
    remove(token,id):Observable<any>{

      

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Autorization',token);

        return this._http.get(this.url + "video/remove/"+id,{ headers: headers });
    }

 

   


        
             
    
}
