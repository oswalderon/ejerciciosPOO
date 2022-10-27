class Automovil{
    constructor(marca, modelo, velMax){
        this.marca = marca;
        this.modelo = modelo;
        this. velMax = velMax;
    }
    get marca(){
        return this.marca;
    }
    set marca(marca){
        this.Marca = marca;
    }
    get modelo(){
        return this.modelo;
    }
    set modelo(modelo){
        this.Modelo = modelo;
    }
    get velMax(){
        return this.velMax;
    }
    set velMax(velMax){
        this.VelMax = velMax;
    }

    acelerar(aumento){
        velActual = aumento + velActual;
        if (velActual > parseFloat(this.VelMax)){
            velActual = this.VelMax;
            return "\nNo se puede acelerar más allá de la velocidad máxima ("+parseFloat(this.VelMax)+" km/h).\nVelocidad actual:"+velActual+" km/h";
        }
        else{
            return "\nAcelerando "+aumento+" km/h"+"\nVelocidad actual: "+velActual+" km/h";
        }
    }

    desacelerar(decremento){
        velActual = velActual-decremento;
        if (velActual <= 0){
            return "\nEl auto de ha detenido completamente."+velActual+" km/h";
        }
        else{
            return "\nDesacelerando "+decremento+" km/h"+"\nVelocidad actual: "+velActual+" km/h";
        }
    }

    frenar(){
        velActual = 0;
        return "\nEl auto se ha detenido\nVelocidad actual: "+velActual+" km/h";
    }

    detalles(){
        return "\nMarca: "+this.Marca+"\nModelo: "+this.Modelo+"\nVelocidad máxima: "+this.VelMax+" km/h";
    }
}

auto1 = new Automovil("Toyota", "2022", 200);
let velActual = 100;

console.log(auto1.detalles());
console.log("Velocidad actual: "+velActual+" km/h");
console.log(auto1.acelerar(20));
console.log(auto1.desacelerar(50));
console.log(auto1.frenar());