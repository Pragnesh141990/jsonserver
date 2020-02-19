import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name : 'pragnesh1'
})

export class PragneshPipe1 implements PipeTransform{

    transform(val:number) :number{
        return Math.floor(val);
    }
    
}