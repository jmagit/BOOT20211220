function* primosGenerator(num) {
    var calculos = 0;
    var cuantos = +num;
    var rslt = [];
    var candidato = 1;
    while (true) {
        var esPrimo = true;
        candidato++;
        for (var indice in rslt) {
            calculos++;
            if (candidato % rslt[indice] == 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            rslt.push(candidato)
            if (cuantos-- == 0) {
                console.log(`Coste Generator: ${new Intl.NumberFormat('es-ES').format(calculos)}`)
                return candidato
            }
            yield candidato;
        }
    }
}

function primosIterator(num) {
    return {
        rslt: [],
        next: function () {
            if (this.limite <= this.actual) {
                this.calculos++;
                console.log(`Coste Iterator: ${new Intl.NumberFormat('es-ES').format(this.calculos)}`)
                return { done: true }
            }
            while (true) {
                var esPrimo = true;
                this.candidato++;
                if (this.actual < this.rslt.length) {
                    this.calculos++;
                    this.candidato = this.rslt[this.actual++]
                    return { done: false, value: this.candidato }
                }
                for (var indice in this.rslt) {
                    this.calculos++;
                    if (this.candidato % this.rslt[indice] == 0) {
                        esPrimo = false;
                        break;
                    }
                }
                if (esPrimo) {
                    this.rslt.push(this.candidato);
                    this.actual++;
                    return { done: false, value: this.candidato }
                }
            }
        },
        [Symbol.iterator]: function () {
            this.calculos = 0
            this.actual = 0;
            this.limite = num;
            this.candidato = 1
            return this;
        }
    }
}

export { primosGenerator, primosIterator }