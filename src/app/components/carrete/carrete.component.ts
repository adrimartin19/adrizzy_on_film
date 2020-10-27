import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Image } from 'src/app/interfaces/image';
import {  animate,
  query,
  stagger,
  style,
  transition,
  trigger 
} from '@angular/animations';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('2000ms 1500ms', style({ opacity: 1 }))]
  ),
  transition(':leave',
    [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]
  )
]);
@Component({
  selector: 'app-carrete',
  templateUrl: './carrete.component.html',
  styleUrls: ['./carrete.component.scss'],
  animations: [fadeAnimation]
})
export class CarreteComponent implements OnInit {
  @ViewChild('panelAlbum', { read: ElementRef }) public panelAlbum: ElementRef<any>;

  imagenes: Array<Image> = []
  idAlbum: string
  constructor(private _api: ApiService,
              private _ac: ActivatedRoute
    ) {
      this._ac.paramMap.subscribe(params => this.idAlbum= (params.get('id')))
      this.imagenes = this._api.getImagenes(this.idAlbum);
   }

  ngOnInit(): void {
  }

  moverAlbum(num): void{
    this.panelAlbum.nativeElement.scrollLeft += num.deltaY*20;
  }

  goto(imagen: Image){
    window.open(imagen.Url,"_blank");
  }

  setAlbum(imagenes: Array<Image>){
    this.imagenes = imagenes;
  }

}
