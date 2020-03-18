import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Employee } from './employee';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

localurl="http://localhost:3000";
  constructor(private myservices:HttpClient) { }
displaydata():Observable<Employee>{
  return this.myservices.get<Employee>(this.localurl+'/employee')
  .pipe(
    retry(1)
  )
}
}
