export interface IPersona {
  nombre: string;
  apellido: string;
  dni: number;
  fecha_nacimiento: Date;
  tiene_mascota: boolean;
  Presentarse(): void;
}