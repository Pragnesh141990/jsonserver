import { Component, OnInit } from '@angular/core';
//import { CryptoService } from './crypto.service';
import { GetpostservicesService} from './getpostservices.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //mydata:any=[];
  mydata1:any=[];
  constructor( private myservice1 :GetpostservicesService){

    //this.mydata=myservice.disply_data();
  }

  ngOnInit(){
    this.PULLDATA();
  }


  title = 'myapp';
  PULLDATA(){
    this.myservice1.getdata().subscribe(res=>this.mydata1=res);
      
    }
  }



