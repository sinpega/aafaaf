import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name : 'formatea'})

export class FormateaPipe implements PipeTransform{
    transform(valor:string, tipo:string):string{
        if (tipo == "Date") return new Date(valor).toLocaleDateString();
        return '';
    }
}