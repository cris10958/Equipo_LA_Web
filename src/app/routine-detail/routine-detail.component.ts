import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routine-detail',
  templateUrl: './routine-detail.component.html',
  styleUrls: ['./routine-detail.component.css']
})
export class RoutineDetailComponent implements OnInit {
  text:string = "Que buena rutina!!! Gracias por publicar..."
  text_edit: string = "Rutina creada para el fortalecimiento de los musculos de los extremos inferiores"

  constructor() {

   }

  ngOnInit(): void {
    console.log("oki")
  }

}
