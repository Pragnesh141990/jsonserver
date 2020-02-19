import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})

export class ReactiveformComponent implements OnInit {
  title="Reactive Form";
  Contactform:FormGroup;

  constructor(private formbuilder:FormBuilder) { }

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
