import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements OnInit {
  
  mydata:uclass;


  submitdata(pra){
    console.log(pra.value);
    
  }
  constructor() { }

  ngOnInit() {

    this.mydata={
      firstname:'',
      lastname:''
    }
  }

  resetformdata(fdata:NgForm){
    fdata.resetForm();
   
  }

 

}

export class uclass{
  firstname:string;
  lastname:string;

}