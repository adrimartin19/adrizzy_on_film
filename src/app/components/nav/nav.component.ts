import { Component, OnInit } from '@angular/core';
import {  animate,
  query,
  stagger,
  style,
  transition,
  trigger 
} from '@angular/animations';

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('200ms', style({ opacity: 0 })),
      { optional: true}
    )
  ])
]);

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [listAnimation]
})
export class NavComponent implements OnInit{

  titulo: string = ""
  elementos: Array<string> = []
  seleccionado: boolean = false
  elementoSel: string = ""
  backTo: string = "Back To Index"

  ngOnInit(){
  }

  constructor() { 
    this.titulo = 'Adrizzy on Film'
  }

  navList(){
    this.elementos = this.elementos.length ? [] : ['Carrete 1', 'Verano', 'Carrete 2'];
  }


  setSeleccionado(sel){
    this.elementoSel = sel;
    this.backTo = sel;
    this.seleccionado = true;
  }

  isSeleccionado(){
    return this.seleccionado;
  }

}

