//Creo la interfaz para que todos los objetos creados obligatoriamente utilicen todos los parámetros
//creados y utilicen el método presentarse()

export interface IPersona {
  nombre: string;
  apellido: string;
  dni: number;
  fecha_nacimiento: Date;
  tiene_mascota: boolean;
  Presentarse(): void;
}