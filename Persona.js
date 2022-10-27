class Personas {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    set nombre(nombre){
        this.Nombre = nombre;
    }
    get nombre(){
        return this.nombre;
    }
    set apellido(apellido){
        this.Apellido = apellido;
    }
    get apellido(){
        return this.apellido;
    }
    set edad(edad){
        this.Edad = edad;
    }
    get edad(){
        return this.edad;
    }

    imprimir(){
        return "\nNombre completo: "+this.Nombre+" "+this.Apellido+"\nEdad: "+this.Edad+" años."
    }

    restEdad(){
        if (this.Edad >= 18){
            return "Es mayor de edad.";
        }
        else{
            return "No es mayor de edad.";
        }
        
    }
}

class Usuario extends Personas{
    constructor(nombre, apellido, edad, user, pass){
        super(nombre, apellido, edad)
        this.user = user;
        this.pass = pass;
    }
    set user(user){
        this.User = user;
    }
    get user(){
        return this.user;
    }
    set pass(pass){
        this.Pass = pass;
    }
    get pass(){
        return this.pass;
    }

    info(){
        return "\nBienvenid@ "+this.User+this.imprimir()+"\n"+this.restEdad();
    }
}

const usuario1 = new Usuario("Silvia", "Romero", 30, "silvia.romero", "sr12345");
console.log(usuario1.info());