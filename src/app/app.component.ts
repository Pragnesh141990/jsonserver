import { Component } from '@angular/core';
import { CryptoService } from './crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mydata=[];
  constructor(private myservice:CryptoService){

    this.mydata=myservice.disply_data();
  }
  title = 'myapp';
  
}
