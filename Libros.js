class Libro {
    constructor(titulo, autor, precio){
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
    }
    set titulo(titulo){
        this.Titulo = titulo;
    }
    get titulo(){
        return this.titulo;
    }
    set autor(autor){
        this.Autor = autor;
    }
    get autor(){
        return this.autor;
    }
    set precio(precio){
        this.Precio = precio;
    }
    get precio(){
        return this. precio;
    }

    detalles(){
        return `\nTítulo: ${this.Titulo}\nAutor: ${this.Autor}\nPrecio: $${this.Precio}.`;
    }
}

class Curso extends Libro {
    constructor(titulo, autor, precio, curso){
        super(titulo, autor, precio)
        this.curso = curso;
    }
    set curso(curso){
        this.Curso = curso;
    }
    get curso(){
        return this.curso;
    }

    imprimirCurso(){
        return `\nCurso: ${this.Curso}`;
    }
}

class Universidad extends Curso{
    constructor(titulo, autor, precio, curso, facultad){
        super(titulo, autor, precio, curso)
        this.facultad = facultad;
    }
    set facultad(facultad){
        this.Facultad = facultad;
    }
    get facultad(){
        return this.facultad;
    }

    imprimirFacultad(){
        return `\nFacultad: ${this.Facultad}`;
    }
}

class Novela extends Libro{
    constructor (titulo, autor, precio, tipo){
        super(titulo, autor, precio)
        this.tipo = tipo;
    }
    set tipo(tipo){
        this.Tipo = tipo;
    }
    get tipo(){
        return this.tipo;
    }

    imprimirTipo(){
        return `\nTipo de Novela: ${this.Tipo}`;
    }
}

libro1 = new Universidad("Thermodynamics and Introduction to Thermostatistics", "Herbert B. Callen", 200, "Segundo Año", "Ciencias Básicas")
novela1 = new Novela("A Song of Ice and Fire", "George R. R. Martin", 60, "Fantasía épica")
console.log(libro1.detalles()+libro1.imprimirCurso()+libro1.imprimirFacultad());
console.log(novela1.detalles()+novela1.imprimirTipo());
