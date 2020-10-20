import { Component, OnInit } from '@angular/core';
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

}
