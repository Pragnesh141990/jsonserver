import { Injectable } from '@angular/core';
import { pragneshPipe } from './mypipe';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

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
