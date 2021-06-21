import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    providers: [RopaService]
})

export class HomeComponent{
    public titulo= 'Pagina Home';
    public listado_ropa: Array<string>;
    public prenda_a_guardar:string;

    public fecha;
    public nombre = 'asaassasa';

    constructor(
        private _ropaService: RopaService
    ){
        this.listado_ropa = this._ropaService.coleccion_ropa;
        this.prenda_a_guardar = '';
        this.fecha = new Date(2021,4,29);
    }

    ngOnInit(){
       this.listado_ropa = this._ropaService.getRopa();
       console.log(this.listado_ropa);
       console.log(`ropa => ${this._ropaService.prueba()}`);
    }

    addPrenda(){
        this._ropaService.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar = '';
    }

    delPrenda(indice:number){
        this._ropaService.delPrenda(indice);
    }
}