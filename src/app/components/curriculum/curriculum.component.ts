import { Component, OnInit } from '@angular/core';
import {  animate,
  style,
  transition,
  trigger 
} from '@angular/animations';


export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('2000ms 500ms', style({ opacity: 1 }))]
  ),
  transition(':leave',
    [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]
  )
]);

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
  animations: [fadeAnimation]
})
export class CurriculumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
