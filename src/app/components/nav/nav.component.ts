import { Component, OnInit } from '@angular/core';
import { Elemento } from 'src/app/interfaces/elemento';
import {  animate,
  query,
  stagger,
  style,
  transition,
  trigger 
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]
  )
]);

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    )
  ])
]);

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [listAnimation, fadeAnimation]
})

export class NavComponent implements OnInit{

  titulo: string = ""
  elementos: Array<Elemento> = []
  showInfo: boolean = false
  showList: boolean = false

  ngOnInit(){
  }

  constructor() { 
    this.titulo = 'Adrizzy on Film'
  }

  navList(){
    this.elementos = this.elementos.length ? [] : [{Name: "Carrete 1", LinkRoute: "carrete1"}];
    if(!this.showList ) document.getElementById("selectPhoto").style.textDecoration = "underline solid 5px"
    else document.getElementById("selectPhoto").style.textDecoration = ""
    this.showList = !this.showList
    
    
  }

  showSlider(tipo: string){
    if(tipo == 'photo'){
      this.navList()
      if(this.isShowInfo()) this.info()

    }

    if(tipo == 'info'){
      this.info()
      if(this.isShowList()) this.navList();
    }
  }

  info(){
    if(!this.showInfo) document.getElementById("selectInfo").style.textDecoration = "underline solid 5px"
    else document.getElementById("selectInfo").style.textDecoration = ""
    this.showInfo = !this.showInfo
    
  }

  isShowInfo(){
    return this.showInfo
  }

  isShowList(){
    return this.showList
  }

}

