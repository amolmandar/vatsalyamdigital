//import { environment } from './../../../environments/environment';
//import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from './../../../environments/environment'
@Injectable()
export class DatabaseService {

    constructor(private http:HttpClient){
        
    }
    url=environment.api;
    /* resData:JSON[];
    getData(){
        return this.resData;
        install ngx-extended-pdf-viewer --save 
    }
    setData(dt){
        this.resData=dt;
    } */
    getDonor(data) : Observable<any>{
            return this.http.get(this.url+'/api/user',{params:data});
    }
}