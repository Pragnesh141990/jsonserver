import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name = "Pragnesh";
  todaydate = new Date();
  item=["Home", "About Us", "Services", "ContectUs"]

  pintu = {
    color:"red",
    margin:"10px"

  }

  constructor() { }

  ngOnInit() {
  }

}
