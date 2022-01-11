describe('Pruebas de las calculadora', () => {
    let calc = null;

    beforeEach(() => {
        calc = new Calculadora();        
    });

    xit('Este esta pendiente', () => {
        fail('Pendiente')
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

        describe('Generado', function () {
            [[1, 2, 3], [2, 2, 4], [3, -2, 1]].forEach(item => {
                it(`Prueba que ${item[0]} mas ${item[1]} es ${item[2]}`, () => 
                expect(calc.suma(item[0], item[1])).toBe(item[2])
                )
            });
            [{a: 1, b: 2, rslt: 3}, {a: 0.1, b: 0.2, rslt: 0.3}].forEach(caso => {
                it(`Prueba con propiedades que ${caso.a} mas ${caso.b} es ${caso.rslt}`, () => 
                expect(calc.suma(caso.a, caso.b)).toBe(caso.rslt)
                )
            });

        });

        fdescribe('Doble', () => {

            it('Fake', () => {
                // let calc = new Calculadora();
                let fake = spyOn(calc, 'suma').and.returnValue(3);
                let rslt = calc.suma(2, 2);
                expect(fake).toHaveBeenCalled();
                expect(3).toBe(rslt);
            })

        })

    
    });

    it('Multiplica', () => {
        let calc = { multiplica: (a, b) => 4 };

       expect(4).toBe(calc.multiplica(5,5));
    })
})

describe('Asincronos', () => {
    it('async fetch', async () => {
        const page = 1
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
        if (response.ok) {
            const lst = await response.json();
            expect(10).toBe(lst.length);
        } else {
            fail('Error ' + response.status + ': ' + response.statusText)
        }
    })
    
    it('asincrono fetch', done => {
        const page = 1
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`).then(response => {
            if (response.ok) {
                response.json().then(lst => {
                    expect(10).toBe(lst.length);
                    done();
                }
                ).catch(() => done.fail());
            } else {
                done.fail()
            }
        }).catch(() => done.fail());

    })
})