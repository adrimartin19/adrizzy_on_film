import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrete1',
  templateUrl: './carrete1.component.html',
  styleUrls: ['./carrete1.component.scss']
})
export class Carrete1Component implements OnInit {


  backTo: string = "Carrete 1"
  idPage: string = "Carrete 1"

  constructor() { }

  ngOnInit(): void {
  }

}
