// este archivo dentro de la carpeta 'src/store' lo vamos a utilizar para controlar el estado de nuestra aplicación. Podemos
// tener uno para cada componente, con el fin de facilitar el uso de nuestra aplicación.
// Para este caso vamos a importar 'reactive' desde vue
import {reactive} from 'vue';

// ahora creamos una variable exportable con nuestro reactive para poder manipular los distintos valores
export const store = reactive({
    // ahora le indicamos los objetos que vamos a utilizar, en este caso son 2: params y people. Los métodos los vamos a definir
    // por fuera, pero podemos hacerlo aquí dentro.
    params: {
        // aquí vamos a almacenar los resultados de las cuentas, total, propiona y demás
        // total es el total de la cuenta
        total: 0,
        // tip porcentaje de la propina
        tip: 0,
        // people es por la cantidad de personas que se divide la cuenta
        people: 0,
        // remaining hace referencia a lo que falta por pagar
        remaining: 0,
    },
    people: [
        // aquí es donde irán las características de cada una de las personas
    ],
    
});

// Ahora vamos con las functions, recordar que las debemos exportar para que sean funcionales a nuestra app
export function getTotal() {
    // vamos a pedirle que nos retorne el total más la propina, no olvidar indicarle que los valores tiene que sacar de:
    // el archivo store y dentro de nuestro objeto params y el valor que buscamos => store.params.value
    return store.params.total * (store.params.tip / 100 + 1);
}

// Ahora creamos la function para dividir la cuenta entre todas las personas
export function calculate() {
    // como people va a tener elementos, cada vez que realice el cálculo tenemos que indicarle que coloque nuestro array en 0
    store.people = [];
    // variable que utilizamos para calcular
    const total = store.params.total
    const tip = store.params.tip
    const people = store.params.people
    const getPersonTotal = getTotal() / people;

    // Ahora guardamos el resultado de getTotal() dentro de la variable remaining
    store.params.remaining = getTotal();
    // Tenemos que indicarle de crear los cuadritos con la cantidad a pagar por persona. Para ello vamos a utilizar un bucle for
    for (let i = 0; i < people; i++) {
        // vamos a subir un objeto con cada people
        store.people.push({
            // le creamos un ID
            id: crypto.randomUUID(),
            // Ahora le damos un index
            numberOfPerson: i + 1,
            // Le indicamos el total que debe pagar
            getPersonTotal,
            // nos aseguramos si ya pagó
            paid: false,
        });
    }

    // console.log(total, tip, people, getPersonTotal)
    // console.log(store.people)
    // Luego vamos a tener que llamar a la function que calcule el restante por pagar
    calculateRemaining()
}

// Esta function de calcular el restante, no la exportamos porque no es necesario tenerla por fuera, con llamarla e utilizarla
// aquí en store es suficiente.
function calculateRemaining() {
    // vamos a buscar los items en los cuales sean distintos de falso, esto significa que la persona ya pagó
    const missingToPay = store.people.filter(item => !item.paid)
    // Teniendo eso tenemos que sacar el total de lo que nos falta por pagar
    const remaining = missingToPay.reduce((acc, item) => (acc + item.getPersonTotal), 0)

    // ahora actualizamos el valor de remaining
    store.params.remaining = remaining;
}

// Ahora si vamos a crear una function en la cual sepamos quién pagó, esta function se la vamos a exportar, le vamos a pasar
// 2 parámetros: el id de la persona y su estado de si pagó o no
export function pay(id, paid) {
    // primero vamos a buscar por persona con el id
    const person = store.people.find(item => item.id === id);
    // Ahora comprobamos si pagó o no
    if(person) {
        person.paid = paid;
        // No olvidar que tenemos que volver a llamar al importe restante por pagar
        calculateRemaining()
    }
}

// LUEGO TODAS ESTAS FUNCTIONS Y ESTADOS LOS TENDREMOS QUE LLAMAR DESDE NUESTROS COMPONENTES Y VEREMOS
// CÓMO FUNCIONA CADA UNO.