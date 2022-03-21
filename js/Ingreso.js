class Ingreso extends Dato{
    static contadoringreso = 0;
    constructor(descripcion, valor){
        super(descripcion, valor)
        this._id = ++ingreso.contador;
    }
    get idingreso() {
        return this._id
    }
    toString(){
        return
    }
}