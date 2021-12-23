# BootCamp 2 - Java Front End

## HTML

- Prototipo Pizza Proyect

## CSS

### Elementos

- Estilos diferenciados
- Variables
- Diseño adaptable (mobile first)
- flex y grid
- Consultas de medios, Imagenes
- BEM, ...
- Fuente propia
- Impresora
- *Animaciones y transformaciones*

### Enlaces

- [Fotos](https://picsum.photos/)
- [Iconos](https://fontawesome.com/)
- [Textos](https://www.lipsum.com/)

## JavaScript

Sgúen etsduios raleziaods por la Uivenrsdiad ignlsea de Cmdibrage, no ipmotra el odren en el que las ltears etsén ersciats, la úicna csoa ipormtnate es que la pmrirea y la útlima ltera esétn ecsritas en la psiócion cocrreta. El retso peuden etsar ttaolmntee doaerdsendo y aún pordás lerelo sin pobrleams, pquore no lemeos cada ltera en sí msima snio cdaa paalbra etenra.

Cuaquleir tetxo se pduee leer... si se respetan la primera y la última letra de cada palabra

### Ejercicios

#### Sintaxis y funciones

1. Crear una función que devuelva un numero aleatorio (Math.random()) dentro del rango dado.
2. Adivina el Número, generar un número entre el 0 y el 100, introducir un número e informar si es igual, mayor o menor. Hay un máximo de 10 intentos para encontrar el número que sea igual.
3. Crear una función que devuelva un array con el numero de elementos indicado, inicializados al valor suministrado.
4. Crear una función que devuelva un determinado número de números primos.
5. Crear una función que valide un NIF
6. Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".

#### Objetos

1. Crear la función constructora del juego Adivina el Número.
2. Crear la clase del juego Adivina el Número.

#### DOM

1. Calculadora.
2. Validar formulario de clientes.

## Angular

1. Reproducir la calculadora
2. Reproducir el formulario de Clientes en el componente ClienteFormulario
3. Crear módulo CommonComponent (export, import)
    - Crear componente FormButtons con los botones de Enviar y Volver (@output: send, cancel - @input: send-disabled)
    - Crear componente ShowErrorsMessages que muestre los errores de validación (@input: errors)
4. Laboratorio de servicios: Notificaciones
5. Convertir ShowErrorsMessages en una directiva
6. Crear directivas de validación:
    - IBAN,
    - greater-than,
    - before, after, future, futureOrPresent, past, ...
7. Laboratorio CRUD: Contactos
8. Laboratorio Routing
9. Testing de servicios, componentes, directivas

## Testing

https://mvnrepository.com/artifact/org.mockito/mockito-core/4.0.0  
https://mvnrepository.com/artifact/org.mockito/mockito-junit-jupiter/4.0.0

## Proyecto final

### Back End

- Microservicio: Catalogo
  - Pizzas, Comentarios
  - Ingredientes
  - Autorizar:
    - No autenticados: Solo GET
    - Autenticados: POST (Solo Comentarios)
    - Empleados: GET, POS, PUT, DELETE
- Microservicio: Autentication
  - Usuarios
    - Autorizar: Administradores: GET, POS, PUT, DELETE
  - Login
    - No autenticados: Solo GET
> - Microservicio: Compras
>   - Pedidos Pizzas: una pizza o mas
>     - Autorizar: Autenticados: GET, POS, PUT (solo si solicitada), DELETE (solo si solicitada)
>   - Seguimiento pedidos:
>     - Cambios de estado:
>       - solicitada > elaborandose > enviada > recibida (empleados)
>       - solicitada > cancelada (clientes)
- Validaciones
- Con bateria de pruebas
- *Documentado con OpenApi*
- *Despliegue con Docker*

### Front End

- Aplicación Angular: Pizza Web
  - Anonimos: Consultar la carta
  - Autenticados: Consultar la carta, dejar comentarios, *hacer pedidos, modificar o cancelar pedidos, consultar pedido*.
  - Personal (Autenticados): Mantener pizzas e ingredientes, *consultar pedidos, cambiar estado pedido*.
  - Administradores (Autenticados): Mantener usuarios.
- Con bateria de pruebas
- Con enrutamientos
- Validaciones
- Con estilo propio: Diseño adaptable, BEM, ...
- Accesible
