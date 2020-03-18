import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';

const localUrl = "http://jsonplaceholder.typicode.com/users";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class GetpostservicesService {

  constructor( private httpclient:HttpClient) { }
  getdata(){
    return this.httpclient.get(localUrl);
  }
}


