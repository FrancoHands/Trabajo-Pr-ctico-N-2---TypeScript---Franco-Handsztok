import { Persona } from "./Persona.js"
import type { IPersona } from "../Interfaz/IPersona.js"

export class Profesor extends Persona implements IPersona{
  materia: string;
  
  constructor(nombre: string, apellido: string, dni: number, fecha_nacimiento: Date, tiene_mascota: boolean, materia: string){
    super(nombre, apellido, dni, fecha_nacimiento, tiene_mascota);
    //El super dentro del constructor se utiliza para heredar todas las propiedades de Persona
    this.materia = materia;
  }

  Presentarse(): void {
    console.log(`Soy el profesor y dicto la materia ${this.materia}`);
  }
}