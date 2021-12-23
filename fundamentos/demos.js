var a = 2, x;
let b = 2

function kk() {
    let i = 1;
    function interna() {
        return i * 2;
    }

    if(true) {
        let j = 2;
        // ...        
    }
    c = i + j + interna();
    return c;
}

if(c === kk()) {
    // pinta iguales
}

var imprimir = true, rslt = 2;

c = a == b;
d = a === b;

c = a + b + j;
a = '€2000'
c = a * b;
c = b / 0;
c = Infinity + 'Algo';

c = b = 2;

if(impimir || rstl) {

}

fichero = 'uno';


t = [10, 20, 30];
//t = { uno: 10, dos: 20}
rslt = 0;
for (i of t)
    rslt += i;
rslt

fn(t)
fn(...t)

function avg(a, b, ...resto) {

}

avg(1, 2, 3, 4)

var cuadrado = function(a) { return a * a; }
cuadrado = a => a * a;
(a, b) => {
    // ...
    return a + b;
}

var t = new Array();
var t = [];
t = [10, 20, 30];
a = t[0];
t[5] = 50;
b = t[3];

t.splice(1, 1)
t.push(60)

for (i in t)
    rslt += i;

var o = new Object();
o = {};

o = { uno: 10, dos: 20, metodo = () => a + b}
a = o.uno;
a = o['uno'];
cmp = 'uno';
o.cmp = () => a + b;
o.uno = () => a + b;
a = o.uno;
a = o.cmp;
a = o[cmp]();

a = o.cmp()

delete o.uno


function Persona(id, nombre, apellidos, trata) {
    var vm = this;
    var tratamiento = trata ? trata : 'Sr.';
    this.id = id
    this.nombre = nombre
    this.apellidos = apellidos

    this.nombreCompleto = function() { 
        return tratamiento + ' ' + vm.nombre + ' ' + this.apellidos; 
    }
    this.Tratamiento = function(value) { 
        if(value) 
            tratamiento = value
        else
            return tratamiento; 
    }
}

class CPersona {
    constructor(id, nombre, apellidos, trata) {
        this._tratamiento = trata ? trata : 'Sr.';
        this.id = id
        this.nombre = nombre
        this.apellidos = apellidos
    }
    nombreCompleto() { 
        return this._tratamiento + ' ' + this.nombre + ' ' + this.apellidos; 
    }
    set Tratamiento(value) { 
        this._tratamiento = value ? value : 'Sr.'
    }
    get Tratamiento() { 
        return this._tratamiento;
    }
}
function fn(tratamiento, algo) {
    return tratamiento + ' ' + this.nombre + ' ' + this.apellidos; 
}

Persona.prototype.count = 0;
Persona.prototype.saluda = function() { 
    return `Hola, soy ${this.nombre}`; 
};

var alum1 = new Persona(1, 'Pepito', 'Grillo');
var alum2 =  Persona(2, 'Carmelo', 'Coton');
var alum3 =  CPersona(2, 'Carmelo', 'Coton');

alum3.id = 3;
this._tratamiento =  'Don';
alum3.Tratamiento = 'Don';
alum3.setTratamiento('Don');

cad = alum3.Tratamiento;
cad = alum3.getTratamiento();

cad = alum1.Tratamiento();
alum1.Tratamiento('Don.')

fn.nombre = 'algo';

cad = fn();
x = 1;
y = 2;

punto = { x: x, y: y };
punto = { x, y, z: 0, suma(x, y) {return x + y } };

fn.bind(alum2);
cad = fn('Sr.');
fn.bind(alum1);
cad = fn('Sr.');
// ...
cad = fn('Sr.');
cad = fn(...['Sr.', 'Otro']);

cad = fn.call(alum1, 'Sr.', 'Otro')
cad = fn.apply(alum2, ['Sr.', 'Otro'])

alum1.id
alum1.count = 1;
alum1.prototype.count = 0;

cad = alum1.saluda();
cad = alum2.saluda();
alum1.prototype.saluda = function() { 
    return `Adios, soy ${this.nombre}`; 
};
cad = alum2.saluda();

delete alum2.id
alum2.nombreCompleto = () => this.apellidos + ', ' + this.nombre; 
alum1.edad = 99;
