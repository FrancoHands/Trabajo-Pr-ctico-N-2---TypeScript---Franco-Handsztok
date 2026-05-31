import { Persona } from "./Persona.js"
import type { IPersona } from "../Interfaz/IPersona.js"

export class Alumno extends Persona implements IPersona{
  carrera: string;
  materia: string;

  constructor(nombre: string, apellido: string, dni:number, fecha_nacimiento: Date, tiene_mascota: boolean, carrera: string, materia: string){
    super(nombre, apellido, dni, fecha_nacimiento, tiene_mascota);
    //El super dentro del constructor se utiliza para heredar todas las propiedades de Persona
    this.carrera = carrera;
    this.materia = materia;
  }
  
  Presentarse(): void {
    console.log(`Soy el alumno ${this.nombre} ${this.apellido} y estudio la materia ${this.materia}`)
  }
}