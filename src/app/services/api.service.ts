import { Injectable } from '@angular/core';
import { Image } from '../interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  imagenes: Array<Image> = []

  constructor() {
    this.imagenes = [
      {
        Url: "./assets/img/Carrete1_1.png"
      },
      {
        Url: "./assets/img/Carrete1_2.png"
      },
      {
        Url: "./assets/img/Carrete1_3.png"
      },
      {
        Url: "./assets/img/Carrete1_4.png"
      },
      {
        Url: "./assets/img/Carrete1_5.png"
      },
      {
        Url: "./assets/img/Carrete1_6.png"
      },
      {
        Url: "./assets/img/Carrete1_7.png"
      }
    ]
  }


  getImagenes(): Array<Image>{
    return this.imagenes
  }
}


