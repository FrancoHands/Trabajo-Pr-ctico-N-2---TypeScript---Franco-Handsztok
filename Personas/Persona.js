export class Persona {
    nombre;
    apellido;
    dni;
    fecha_nacimiento;
    tiene_mascota;
    constructor(nombre, apellido, dni, fecha_nacimiento, tiene_mascota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fecha_nacimiento = fecha_nacimiento;
        this.tiene_mascota = tiene_mascota;
    }
    Presentarse() {
        const mensaje_mascota = this.tiene_mascota ? "tengo mascota" : "no tengo mascota";
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}, mi número de documento es ${this.dni}, nací el ${this.fecha_nacimiento.toDateString()} y ${mensaje_mascota}`);
    }
}
