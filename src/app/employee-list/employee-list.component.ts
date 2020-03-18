import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from 'src/shared/employeeservice.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  mydata:any=[];
  constructor(private employeeservice:EmployeeserviceService) { }

  ngOnInit() {
    this.loaddata();
  }
loaddata(){
  return this.employeeservice.displaydata().subscribe((data)=>{
    this.mydata=data;
  })
}
}
