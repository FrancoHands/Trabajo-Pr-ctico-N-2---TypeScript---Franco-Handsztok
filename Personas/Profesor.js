import { Persona } from "./Persona.js";
export class Profesor extends Persona {
    materia;
    constructor(nombre, apellido, dni, fecha_nacimiento, tiene_mascota, materia) {
        super(nombre, apellido, dni, fecha_nacimiento, tiene_mascota);
        this.materia = materia;
    }
    Presentarse() {
        console.log(`Soy el profesor y dicto la materia ${this.materia}`);
    }
}
