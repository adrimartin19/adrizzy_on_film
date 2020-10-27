import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { Image } from '../interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  imagenes: Array<Image> = []

  constructor(
    private _http: HttpClient
  ) {
    
  }

  loadData(): Promise<void>{
    return new Promise((resolve, reject)=> {
      this._http.get('./assets/emulator/datastore.json').subscribe(
        ((data: Array<Image>) => {
          this.imagenes = data;
          resolve();
        })
      );
    });
    
  }

  getImagenes(idAlbum: string): Array<Image>{
    var copyAlbum: Array<Image> = [];

    this.imagenes.forEach(imagen => {
      if(imagen.IDAlbum == idAlbum) copyAlbum.push(imagen);} )

    return copyAlbum;
  }
}


