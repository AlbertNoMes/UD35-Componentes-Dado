import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  /*SEGUNDO EJEMPLO*/
  /*SI SE QUE VOY A RECIBIR INFORMACION DE OTRO COMPONENTE AL COMPONENTE HIJO, UTILIZAMOS EL SELECTOR @Input*/
  @Input() valor: number | string | undefined; /*TAMBIEN SE PUEDE PONER any*/

  /*PRIMER EJEMPLO*/
  /*valor: number = 0;*/

  constructor() { }

  /*CUANDO LANCEMOS EL COMPONENTE, AUTOMATICAMENTE LANZARA ESTE METODO (OnInit)*/

   /*PRIMER EJEMPLO*/
  /*ngOnInit() {*/
    /*NUMERO ALEATORIO ENTRE 1 Y 6*/
    /*TRUNCATE PARA REDONDEAR*/
    /*this.valor = Math.trunc(Math.random() * 6) + 1;*/
  /*}*/

  /*SEGUNDO EJEMPLO*/
  ngOnInit(): void {
      /*EL METODO DE GENERAR LOS NUMS ALEATORIOS LO CALCULAMOS EN EL COMPONENTE PADRE Y LO ENVIAMOS COMO VALOR AL COMPONENTE HIJO*/
  }

}
