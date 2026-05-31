import { Persona } from "./Persona.js";
export class Profesor extends Persona {
    materia;
    constructor(nombre, apellido, dni, fecha_nacimiento, tiene_mascota, materia) {
        super(nombre, apellido, dni, fecha_nacimiento, tiene_mascota); 
        //El super dentro del constructor se utiliza para heredar todas las propiedades de Persona
        this.materia = materia;
    }
    Presentarse() {
        console.log(`Soy el profesor y dicto la materia ${this.materia}`);
    }
}
