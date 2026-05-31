import { Persona } from "./Persona.js";
export class Alumno extends Persona {
    carrera;
    materia;
    constructor(nombre, apellido, dni, fecha_nacimiento, tiene_mascota, carrera, materia) {
        super(nombre, apellido, dni, fecha_nacimiento, tiene_mascota);
        //El super dentro del constructor se utiliza para heredar todas las propiedades de Persona
        this.carrera = carrera;
        this.materia = materia;
    }
    Presentarse() {
        console.log(`Soy el alumno ${this.nombre} ${this.apellido} y estudio la materia ${this.materia}`);
    }
}
