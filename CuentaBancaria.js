class Cuenta {
    constructor(nombres, apellidos, numCuenta, tipo, saldo=0){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.numCuenta = numCuenta;
        this.tipo = tipo;
        this.saldo = saldo;
    }
    get nombres(){
        return this.nombres;
    }
    set nombres(nombres){
        this.Nombres = nombres;
    }
    get apellidos(){
        return this.apellidos;
    }
    set apellidos(apellidos){
        this.Apellidos = apellidos;
    }
    get numCuenta(){
        return this.numCuenta;
    }
    set numCuenta(numCuenta){
        this.NumCuenta = numCuenta;
    }
    get tipo (){
        return this.tipo;
    }
    set tipo(tipo){
        this.Tipo = tipo;
    }
    get saldo(){
        return this.saldo;
    }
    set saldo(saldo){
        this.Saldo = saldo;
    }

    detalles(){
        return "\nNombre completo del titular: "+this.Nombres+" "+this.Apellidos+"\nNúmero de cuenta: "+this.NumCuenta+"\nTipo de cuenta: "+this.Tipo
    }

    consultarSaldo(){
        return "\nSu saldo actual es de: $"+this.Saldo
    }

    depositar(montoDeposito){
        this.Saldo = parseFloat(this.Saldo+montoDeposito);
        return "\nMonto depositado: $"+montoDeposito+"\nSaldo actual: $"+this.Saldo
    }

    retirar(montoRetiro){
        if(montoRetiro>this.Saldo){
            return "\nSu saldo es menor a la cantidad de retiro solicitada."
        }
        else{
            this.Saldo = parseFloat(this.Saldo-montoRetiro);
            return "\nMonto retirado: $"+montoRetiro+"\nSaldo actual: $"+this.Saldo
        }
    }

}

cuenta01 = new Cuenta("Julio Armando", "Quintanilla Acosta", "01356984908", "Cuenta de Ahorro");
console.log(cuenta01.detalles());
console.log(cuenta01.consultarSaldo())
console.log(cuenta01.depositar(500));
console.log(cuenta01.retirar(200));