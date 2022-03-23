import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  arrAlumno:any[]=[
    {
      nombre:"Alumno 1",
      apellido:"Apellido 1",
      edad:38,
      fechaNacimineto:"27/03/1979",
      foto:"../../assets/img/usuario2.png",
      condicion:"Regular",
      calificacion:7
    },
    {
      nombre:"Alumno 2",
      apellido:"Apellido 2",
      edad:30,
      fechaNacimineto:"17/11/1983",
      foto:"../../assets/img/usuario2.png",
      condicion:"Libre",
      calificacion:8
    },
    {
      nombre:"Alumno 3",
      apellido:"Apellido 3",
      edad:23,
      fechaNacimineto:"01/07/1979",
      foto:"../../assets/img/usuario2.png",
      condicion:"Regular",
      calificacion:4
    },
    {
      nombre:"Alumno 4",
      apellido:"Apellido 4",
      edad:44,
      fechaNacimineto:"01/07/1979",
      foto:"../../assets/img/usuario2.png",
      condicion:"Regular",
      calificacion:9
    }]

  constructor() { }

  ngOnInit(): void {
  }

}
