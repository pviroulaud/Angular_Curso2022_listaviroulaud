import { Component, OnInit } from '@angular/core';
import {Alumno} from '../../clases/alumno';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements OnInit {

  arrAlumno2:Alumno[]=[
    new Alumno(
      "Alumno 1",
      "Apellido 1",
      38,
      new Date("11/01/1980"),
      "../../assets/img/usuario2.png",
      "Regular",
      7
    ),
    new Alumno(
      "Alumno 2",
      "Apellido 2",
      30,
      new Date("12/12/1999"),
      "../../assets/img/usuario2.png",
      "Regular",
      8
    ),
    new Alumno(
      "Alumno 4",
      "Apellido 4",
      44,
      new Date("12/12/1999"),
      "../../assets/img/usuario2.png",
      "Regular",
      4
    ),
    new Alumno(
      "Alumno 3",
      "Apellido 3",
      23,
      new Date("12/12/1999"),
      "../../assets/img/usuario2.png",
      "Libre",
      8
    ),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
