import { Injectable } from '@angular/core';
import { pragneshPipe } from './mypipe';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  myname(n1:string,n2:string){
    // return "pragnesh";
    return n1+n2;
  }

  myname1(p1:number,p2:number){
    return p1+p2;
  }

  student_data=[
    { id:1, studentname:'pragneshPipe'},
    { id:2, studentname:'pratik'},
    { id:3, studentname:'rohitsir'},
    { id:4, studentname:'pankit'},
    { id:5, studentname:'ajay'}
  ]
  constructor() { }

  disply_data(){
    return this.student_data;
  }
}
