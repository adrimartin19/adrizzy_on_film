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
  ),
  transition(':leave',
    [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]
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
      },
      {
        Url: "./assets/img/Carrete1_2.png"
      }
    ]

   }

  ngOnInit(): void {
  }

  moverAlbum(num): void{
    this.panelAlbum.nativeElement.scrollLeft += num.deltaY*10;
  }

  

  

}
