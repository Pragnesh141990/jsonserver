import { Component, OnInit } from '@angular/core';
// import { myclass } from '../contactus/contactus.component';  
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
selectedcountry:string;
mydata:UCLASS;
USERNAME="PRAGNESH";
LASTNAME="KUMAR";
  constructor() { }

  ngOnInit() {
    this.mydata={
      FNAME:'ROHIT KUMAR'
    }
  }
  
  
  resetformdata(f:NgForm){
    f.resetForm();

  }
// countrylist: Myclass[]=[
//   new Myclass("0","---Select Country--",true),
//   new Myclass("1","India",false),
//   new Myclass("2","USA",false),
//   new Myclass("3","Caneda",false),
//   new Myclass("4","Shrilanka",false)
// ];
submiteddata(pra){
 // alert(Object.values(pra.value));
  console.log(pra.value);
 // pra.controls['country'].setValue(this.selectedcountry);

  //alert(pra.controls['country'].value);
}
// reset(formControl:NgForm){
//   formControl.resetForm();
// }
// setDefaults() {
//   alert("HHH");
//   this.Mclass={
//     FirstName:"qwerty"
//   }
// }
// getdata(e){
//   this.selectedcountry=e;
// }
}

export class UCLASS{
  FNAME:string;

}
// export class Myclass {
  
//   id:string;
//   name:string;
//   rr:boolean;

  // constructor(id:string,name:string,rr:boolean) {
  //   this.id=id;
  //   this.name=name;
  //   this.rr=rr;
  // }
// }
