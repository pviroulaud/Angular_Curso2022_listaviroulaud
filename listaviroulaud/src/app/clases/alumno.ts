export class Alumno
{
    nombre:string="Al";
    apellido:string="Ape";
    edad:number=0;
    fechaNacimiento:Date=new Date("01/01/2022");
    foto:string="../../assets/img/usuario2.png";
    condicion:string="Regular";
    calificacion:number=7;

    constructor(nombre:string,
    apellido:string,
    edad:number,
    fechaNacimiento:Date,
    foto:string,
    condicion:string,
    calificacion:number)
    {
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.fechaNacimiento=fechaNacimiento ;
        this.foto=foto;
        this.condicion=condicion;
        this.calificacion=calificacion;
    }
 
}