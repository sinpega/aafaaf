import { Component } from '@angular/core';
import { Empleado } from './empleado';
import { Goma } from './goma';

@Component({
    selector : 'empleado-tag',
    templateUrl : './empleado.component.html'
})

export class EmpleadoComponent {
    public titulo = 'Titulo de Componente empleado'
    public empleado:Empleado;
    public goma:Goma;
    public trabajadores:Array<Empleado>;
    public trabjador_externo:boolean;
    public color:string;
    public color_selecionado:string;
    public result:any;

    constructor(){
        this.empleado = new Empleado('Anthony 0', 999, 'larry Mayor', true, new Date(2021,4,29));
        this.goma = new Goma('Anthony goma', 999, 'larry Mayor', true, new Date(2021,4,29));

        this.trabajadores = [
            new Empleado('Anthony1', 10, 'larry 1', false, new Date(2021,2,29)),
            new Empleado('Anthony2', 20, 'larry 2', true, new Date(2036,4,21)),
            new Empleado('Anthony3', 30, 'larry 3', true, new Date(2002,5,1)),
            new Empleado('Anthony4', 40, 'larry 4', true, new Date(2041,7,6)),
            new Empleado('Anthony5', 50, 'larry 5', true, new Date(2020,8,10)),
        ];

        this.trabjador_externo = false;
        this.color = 'green';
        this.color_selecionado = '#ccc';

        this.result = this.trabajadores.reduce((acc, el) => ({
            ...acc, [el.nombre] : el
            }),{}   
        )
    }

    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }
    CambiarExterno(valor:boolean){
        this.trabjador_externo = valor;
    }
    LogColorSelecionado(){
        console.log(this.color_selecionado);
    }
    miFuncionConDevolucion():string{
        return "Que bueno saber que tipo va a devolver";
    }
}