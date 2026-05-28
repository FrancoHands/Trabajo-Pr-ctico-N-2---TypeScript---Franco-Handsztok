import { Persona } from "./Persona.js"
import { IPersona } from "../interfaz/IPersona.js"

export class Profesor extends Persona implements IPersona{
  materia: string;
  
  constructor(nombre: string, apellido: string, dni: number, fecha_nacimiento: Date, tiene_mascota: boolean, materia: string){
    super(nombre, apellido, dni, fecha_nacimiento, tiene_mascota);
    this.materia = materia;
  }

  Presentarse(): void {
    console.log(`Soy el profesor y dicto la materia ${this.materia}`);
  }
}