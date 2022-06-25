/*
Siempre que puedas utliza const,
sino utliza let,
en el peor de los casos utliza var
*/


// Variables

var year = 2022;
let days = 25; // es un poco mejor


year += 1; // += : year = year +2022
// year = year + 1;

++year; // suma 1 a mi variable

days -= 5; // days = days - 5
--days; // resta 1

console.log(days);
console.log(year);


// constantes: no puede cambiar su valor nunca

const month = 5;

console.log(month);