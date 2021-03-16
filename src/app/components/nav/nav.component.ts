import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit{

  titulo: string = ""
  aboutme: string = ""
  back: string = ""

  ngOnInit(){
  }

  constructor(
    private _router: Router
  ) 
  { 
    this.titulo = 'Adrizzy on Film'
    this.aboutme = 'Sobre mí'
    this.back = 'Atrás'
  }

}

