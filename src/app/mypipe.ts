import { Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name : 'pragnesh'
})

export class pragneshPipe implements PipeTransform{

    transform(val : number) : number{
        return Math.sqrt(val);
    }
}