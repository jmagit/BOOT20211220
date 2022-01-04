import { name as OtroName } from './modulo2.js'

var falsaGlobal = 0;

const NAME = 'modulo 1'
function name() {
    console.log('Soy el modulo 1')
}
function estaEsInterna() {
    console.log('No se puede')
}

export { name, NAME, OtroName }
