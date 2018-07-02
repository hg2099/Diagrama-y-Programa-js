/**
 * Programa que permita calcular lo que hay que pagarle a un trabajador, 
 * teniendo en cuenta su sueldo y las horas extras trabajadas. 
 * Para el pago de horas extras se toma en cuenta la categoría del trabajador.
 */

//Solicitamos el salario.
let salary = parseFloat(prompt('Ingrese su salario.'));

//Solicitamos el número de horas extra.
let extras = parseFloat(prompt('Ingrese el número de horas extra.'));

//Solicitamos el número de categoría correpondiente.
let category = parseInt(prompt('Ingrese la categoría del 1 al 4.'));

//Verificamos que todos los valores sean numéricos.
if (isNaN(salary) || isNaN(extras) || isNaN(category)) {
    alert('Error! Los valores deben ser números.');
} else {
    if (category === 1) {
        if (extras >= 30) {
            extras = 30 * 30;
        } else {
            extras = extras * 30;
        }
    } else if (category === 2) {
        if (extras >= 30) {
            extras = 30 * 38;
        } else {
            extras = extras * 38;
        }

    } else if (category === 3) {
        if (extras >= 30) {
            extras = 30 * 50;
        } else {
            extras = extras * 50;
        }

    } else if (category === 4) {
        extras = 0;
        alert('A la categoría 4 no se le pagan horas extra.');
    } else {
        extras = 0;
        alert('La categoría no se encuentra en el sistema.');
    } alert('Su salario es de $' + (salary + extras));

}

