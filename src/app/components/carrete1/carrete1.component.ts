import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Image } from 'src/app/interfaces/image';
import {  animate,
  query,
  stagger,
  style,
  transition,
  trigger 
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('750ms', style({ opacity: 1 }))]
  )
]);


@Component({
  selector: 'app-carrete1',
  templateUrl: './carrete1.component.html',
  styleUrls: ['./carrete1.component.scss'],
  animations: [fadeAnimation]
})
export class Carrete1Component implements OnInit {

  
  @ViewChild('panelAlbum', { read: ElementRef }) public panelAlbum: ElementRef<any>;
  
  backTo: string = "Carrete 1"
  idPage: string = "Carrete 1"
  imagenes: Array<Image> = []

  constructor() {
    this.imagenes = [
      {
        Url: "./assets/img/Carrete1_1.png"
      },
      {
        Url: "./assets/img/Carrete1_3.png"
      }/*,
      {
        Url: "./assets/img/Carrete1_2.png"
      }*/
    ]

   }

  ngOnInit(): void {
  }

  moverAlbum(num): void{
    
    var tamAlbum = (1.52*document.getElementById("album").offsetHeight)*this.imagenes.length
    var limit = tamAlbum - this.panelAlbum.nativeElement.scrollLeft

    console.log(num.deltaY*3.33)
    if(window.innerWidth  + num.deltaY*3.33 <= limit )
      this.panelAlbum.nativeElement.scrollLeft += num.deltaY*3.33
    else
      this.panelAlbum.nativeElement.scrollLeft = tamAlbum - window.innerWidth

  }

  

  

}
