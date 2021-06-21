import { Component } from '@angular/core';

@Component({
    selector : 'plantillas',
    templateUrl : './plantillas.component.html'
})

export class PlantillasComponent{
    public titulo:string;
    public administrador:boolean;

    constructor(
        
    ){
        this.titulo = "Titulo Plantillas";
        this.administrador = true;
    }

    cambiar(){
        this.administrador = !this.administrador;
    }
}