import { Persona } from "./Persona.js"
import { Profesor } from "./Profesor.js"
import { Alumno } from "./Alumno.js"

const persona1 = new Persona("Franco", "Handsztok", 12345678, new Date(2000, 8, 20), true);
persona1.Presentarse();

const alumno1 = new Alumno ("Brad", "Pitt", 87654321, new Date(1980, 11, 31), true, "Desarrollo en Full Stack", "Programación Backend");
alumno1.Presentarse();

const profesor1 = new Profesor ("Luis", "Leal", 23456789, new Date(1990, 0, 1), false, "Programación Backend");
profesor1.Presentarse();
