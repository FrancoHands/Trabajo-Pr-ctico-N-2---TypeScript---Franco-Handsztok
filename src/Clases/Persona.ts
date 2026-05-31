import type { IPersona } from "../Interfaz/IPersona.js"

//Creo la clase Persona y le agregamos las siguientes propiedades, cada una con su respectivo tipo de dato
export class Persona implements IPersona {
  nombre: string;
  apellido: string;
  dni: number;
  fecha_nacimiento: Date;
  tiene_mascota: boolean;
  
  constructor(nombre: string, apellido: string, dni: number, fecha_nacimiento: Date, tiene_mascota: boolean){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.fecha_nacimiento = fecha_nacimiento;
    this.tiene_mascota = tiene_mascota;
  }
  
  Presentarse (): void {
    const mensaje_mascota = this.tiene_mascota ? "tengo mascota" : "no tengo mascota";
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}, mi número de documento es ${this.dni}, nací el ${this.fecha_nacimiento.toDateString()} y ${mensaje_mascota}`);
  }
}