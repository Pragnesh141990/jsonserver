import { Component, OnInit } from '@angular/core';
import { of, range, timer, concat, interval } from 'rxjs';
import { map, first, take, takeLast } from 'rxjs/operators';
//const sampledata = of(1,9,3,5,6,7);

@Component({
  selector: 'app-introrxjs',
  templateUrl: './introrxjs.component.html',
  styleUrls: ['./introrxjs.component.css']
})
export class IntrorxjsComponent implements OnInit {
  x:number;
  sampledata = of(1,9,3,5,6,7);
  sampledata1 = of({id:1234, name:'pragnesh'}, [56,78,90], function display(){return 'hello pragnesh'});
  result = this.sampledata1.subscribe(well => console.log(well));
  
  //map
  
  constructor() { 
    
    const result=map((x:number)=>x+9)(of(5,8,9)).subscribe((y)=>console.log(`The values ${y}`));
    const result1=map((x:number)=>x+7)(this.sampledata).subscribe((y)=>console.log(`The values=> ${y}`));
    const result2=map((z:number)=>z-+5)(this.sampledata).subscribe((a)=>console.log(`The Valuew==> ${a}`));
    //first
    first()(of(1444,2,3,4,5)).subscribe((f)=>console.log(`The Value of f=${f}`));

    //range
    const data=range(2,5);
    data.subscribe(x=> console.log(x));

    //timer
    const timerexample = timer(3000, 1000);
    timerexample.subscribe(t=> console.log(t));

    //concet
    const timer4 = interval(1000);
    const timer5 = timer4.pipe(take(5));
    timer5.subscribe(t4=>console.log(t4));

    //tacklast
    const tack2 = range(5, 100);
    const lastThree = tack2.pipe(takeLast(3));
    lastThree.subscribe(l => console.log(l));

    //tacklast easy wav
    
    range(5, 100).pipe(takeLast(3)).subscribe(l => console.log(l));
  }

  ngOnInit() {
    
    
    
  }

}
