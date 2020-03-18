import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CryptoService } from '../crypto.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})

export class ReactiveformComponent implements OnInit {
  title="Reactive Form";
  Contactform:FormGroup;  
  pp:string;
  pk:number;

  constructor(private formbuilder:FormBuilder , private myservices:CryptoService) { }
  
  ngOnInit( ) {
    // this.Contactform=new FormGroup({
    //   firstname:new FormControl(),
    //   lastname:new FormControl(),
    //   emailid:new FormControl(),
    //   mobilenumber:new FormControl(),
    //   address:new FormGroup({
    //     city:new FormControl(),
    //     pincode:new FormControl(),
    //     street:new FormControl()
    //   })

    // })
    this.Contactform=this.formbuilder.group({
      firstname:['',[Validators.required,Validators.minLength(4), Validators.maxLength(5)]],
      lastname:['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
      emailid:['', [Validators.required,Validators.email]],
      mobilenumber:[''],
      address:this.formbuilder.group({
        city:[''],
        pincode:[''],
        street:['']
      })
      
    })
    
    this.pp=this.myservices.myname("Pragnesh","Kadiya");
    this.pk=this.myservices.myname1(10, 30);

  }
get firstname(){
  return this.Contactform.get('firstname');
}

get lastname(){
  return this.Contactform.get('lastname');
}

get emailid(){
  return this.Contactform.get('emailid');
}

  displaydata(){
    console.log(this.Contactform.value);
  }
}
