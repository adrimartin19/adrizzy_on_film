import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/interfaces/album';
import {  animate,
  query,
  stagger,
  style,
  transition,
  trigger 
} from '@angular/animations';
import { Router } from '@angular/router';
import { Image } from 'src/app/interfaces/image';

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    )
  ])
]);

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('500ms', style({ opacity: 1 }))]
  )
]);

export const fadeSlider = trigger('fadeSlider', [
  transition(':enter', [
    style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]
  ),
  transition(':leave', [
    style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))
  ])
]);



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [listAnimation, fadeAnimation, fadeSlider]
})

export class NavComponent implements OnInit{

  titulo: string = ""
  albums: Array<Album> = []
  showInfo: boolean = false
  showList: boolean = false
  hiddenNav: string = "<<"
  isHiddenNav: boolean = false
  imagenes: Array<Image> = []

  ngOnInit(){
  }

  constructor(
    private _router: Router
  ) 
  { 
    this.titulo = 'Adrizzy on Film'
    
  }

  navList(){
    this.albums = this.albums.length ? [] : 
    [{Name: "Carrete 1", LinkRoute: "carrete1"}, 
    /*{Name: "Verano", LinkRoute: "verano"},  {Name: "Carrete 2", LinkRoute: "carrete2"}*/
    ];
    
    
    
    
    
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

  getHiddenNav(){
    return !this.isHiddenNav;
  }

  toHiddenNav(): void{
      if(this.isHiddenNav)
        this.hiddenNav = "<<"
      else
        this.hiddenNav = ">>"
      
      this.isHiddenNav = !this.isHiddenNav
  }

  goCarrete(linkRoute: string){
    
    this._router.navigate(['/carrete', linkRoute])
  }

}

