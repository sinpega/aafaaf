import { Injectable } from '@angular/core';

@Injectable()

export class RopaService{
    public nombre_prenda = 'Pantalones Vaqueros';
    public coleccion_ropa = ['Pantalon Blanco', 'Camisa Roja'];

    //metodos
    prueba():string{
        return this.nombre_prenda;
    }

    addRopa(nombre_prenda:string):Array<string>{
        this.coleccion_ropa.push(nombre_prenda);
        return this.coleccion_ropa; 
    }

    delPrenda(indice:number):Array<string>{
        this.coleccion_ropa.splice(indice, 1);
        return this.getRopa(); 
    }

    getRopa():Array<string>{
       return this.coleccion_ropa; 
    }
}