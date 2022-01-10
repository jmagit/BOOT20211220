fdescribe('Pruebas de las calculadora', () => {
    let calc = null;

    xit('Este esta pendiente', () => {
        fail('Pendiente')
    });

    beforeEach(() => {
        calc = new Calculadora();
    });

    describe('Sumas', () => {
        describe('OK', () => {
            it('Positivos', () => {
                // let calc = new Calculadora();
                let rslt = calc.suma(2, 2);
                expect(4).toBe(rslt);
            })
            it('Cadenas', () => {
                // let calc = new Calculadora();
                let rslt = calc.suma('2', 2);
                expect(4).toBe(rslt);
            })
            it('Cero', () => {
                // let calc = new Calculadora();
                let rslt = calc.suma(0, 0);
                expect(0).toBe(rslt);
            })

        })
        describe('KO', () => {
            it('No números', () => {
                let calc = new Calculadora();
                let rslt = calc.suma('a', 2);
                expect(rslt).toBeNaN();
            })
            it('No valores', () => {
                let calc = new Calculadora();
                let rslt = calc.suma('a', 2);
                expect(rslt).toBeNaN();
            })

        })
    });
})