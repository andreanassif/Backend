class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
}



const user1 = new Usuario("user1", "nassif1", "libro1", "perro");
console.log(user1);