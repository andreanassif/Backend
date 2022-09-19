class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    addBook(nombre, autor){
        const newBook = {nombre: nombre, autor: autor};
        console.log(newBook);
        this.libros.push(newBook);
    }

    getFullName () {
        return `${this.nombre} + ${this.apellido}`;
        
    }

    addMascota(mascotas){
        const newMascota = {mascotas: mascotas};
        console.log(newMascota);
        this.mascotas.push(newMascota);
    }

    countMascotas(){
        this.mascotas.length();
    }

    getBookNames(){ 
        this.libros.map();
    }

    
}




const user1 = new Usuario("user1", "nassif1", [{nombre:"libro1", autor:"author1"}], ["perro", "gato"]);
console.log(user1);
user1.addBook("libro2", "author2");
user1.getFullName();
user1.addMascota("perico");
user1.getBookNames();
user1.countMascotas();









