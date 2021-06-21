import { ClassStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
    selector : 'fruta',
    templateUrl : './fruta.component.html'
})

export class FrutaComponent{
 public nombre_componente  =  'Componente de Fruta';
 public listado_frutas = 'Naranja, Manzana, Pera y Sandia';   
 public nombre:string;
 public edad:number;
 public mayorEdad:boolean;
 public arreglo:Array<any> = ['1','2','3'];
 public comodin:any;

 constructor(){
     this.nombre='Anthony';
     this.edad = 25;
     this.mayorEdad= true;
     this.comodin = 'SI';
     console.log(this.arreglo);
 }

 ngOnInit(){
    this.Saludo();

    var uno = 55;
    var dos = 96;

    if (uno === 55)
    {
        let uno = 44;
        var dos = 88;
        console.log('uno => ' + uno + ', dos => ' + dos);
    }

    console.log('uno => ' + uno + ', dos => ' + dos);
 }

 Saludo(){
     console.log('Hola ' + this.nombre)
 }

}
