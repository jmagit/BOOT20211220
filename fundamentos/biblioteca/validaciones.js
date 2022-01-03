const LETRAS_DEL_NIF = 'TRWAGMYFPDXBNJZSQVHLCKE'

export function esNIF(nif) {
    if (!/^\d{1,8}[A-Za-z]$/.test(nif))
        return false;
    const letterValue = nif.substr(nif.length - 1);
    const numberValue = nif.substr(0, nif.length - 1);
    return letterValue.toUpperCase() === LETRAS_DEL_NIF.charAt(numberValue % 23);
}

export function estaEnMayuscula(valor) {
    if(!valor) return true;
    return valor.toString().toUpperCase() === valor;
}

export function esPalindromo(cadena) {
    if (typeof (cadena) != "string" || cadena.trim().length == 0) return false;
    cadena = cadena.replace(/[ .,;:#¿?¡!()\[\]{}=+\-\*\/_`~$%\^&'"]/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
    for (let i = 0; i < cadena.length - i; i++) {
        if (cadena.charAt(i) !== cadena.charAt(cadena.length - 1 - i)) return false;
    }
    return true;
}
