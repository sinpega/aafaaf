import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
    selector : 'coches',
    templateUrl : './coches.component.html',
    providers : [PeticionesService]
})

export class CochesComponent{
    public coche:Coche;
    public coches:Array<Coche>;
    public articulos:any;

    constructor(
        private _peticionesService : PeticionesService
    ){
        this.coche = new Coche('','','');
        this.coches = [
            new Coche('Ford Focus','22','Rojo'),
            new Coche('Seat','51','Gris')
        ];
    }

    ngOnInit(){
        console.log(this._peticionesService.getArticulos().subscribe(
            resutl => {
                this.articulos =resutl;
            },
            error => {
                console.log(error.message)
            }

        ));
    }   

    OnSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche('','','');
    }
}