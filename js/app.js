/*clase ingreso*/

class Ingreso{
    static contadorid = 0;
    constructor(name,value){
        this._id = ++Ingreso.contadorid;
        this._name = name;
        this._value = value;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name; 
    }

    get value(){
        return this._value;
    }

    set value(value){
        this._value = value;
    }
}

const ingresos = [
    new Ingreso('Salario', 3000),
    new Ingreso('Venta',500)
];


/*clase egreso*/

class Egreso{
    static contadorid = 0;
    constructor(name,value){
        this._id = ++Ingreso.contadorid;
        this._name = name;
        this._value = value;
        this._percentage = 0;
    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }

    set name(name){
        this._name = name; 
    }

    get value(){
        return this._value;
    }

    set value(value){
        this._value = value;
    }
}

const egresos = [
    new Egreso('Comida',100),
    new Egreso('Alquiler',1000)
];


/*formato monedas*/
const formatMoney = (valor) =>{
    return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2});
}

/*funcion boton*/

const sendInfo = () => {

    const option = document.getElementById('options').selectedIndex;

    const form = document.getElementById("form");
    const description = form["content"];
    const valor = form["number"];

    if(description.value === "" || valor.value === "" ){
        alert("Ingresa datos en el formulario")
    }else{
        if(option === 0){
            ingresos.push(new Ingreso(description.value,parseFloat(valor.value)))
            console.log(ingresos)
        }
        
        if (option === 1){
            egresos.push(new Egreso(description.value,parseFloat(valor.value)))
            console.log(ingresos)
            console.log(egresos)
        }
    }

}