import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-info-alumno',
  templateUrl: './info-alumno.component.html',
  styleUrls: ['./info-alumno.component.css']
})
export class InfoAlumnoComponent implements OnInit {
  @Input() nombre:string="Al";
  @Input() apellido:string="Ape";
  @Input() edad:number=0;
  @Input() fechaNacimiento:Date=new Date("01/01/2022");
  @Input() foto:string="../../assets/img/usuario2.png";
  @Input() condicion:string="Regular";
  @Input() calificacion:number=7;

  constructor() { }
  
  ngOnInit(): void {
  }
  
}
