import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name : 'conversor'})

export class ConversorPipe implements PipeTransform{
    transform(valor:string, por:string):string{
        let value_one = parseInt(valor);
        let value_two = parseInt(por);
        let result = 'la multiplicacion de ' + value_one  + ' x ' + value_two + ' = ' + (value_one * value_two);
        return result;
    }
}

