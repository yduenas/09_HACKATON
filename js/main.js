//alert("Bienvenido a la HACKATON 9");

/*Ejercicios de algoritmos: */
/*
1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se
deberá imprimir en pantalla*/

function suma(argumento1, argumento2) {
	let texto = "El resulado de la suma es: ";
	let resultado = argumento1 + argumento2;
	return texto + resultado;
}
console.log(suma(1, 8));

/*
2. Un estudiante realiza 4 exámenes, calcular el promedio de estos*/

function promedioExamenes(values) {
	let texto = "El promedio de los examenes es: ";
	let sum = values.reduce((previous, current) => (current += previous));
	let avg = sum / values.length;
	return texto + avg;
}
let examenes = [5, 20, 15, 10];
console.log(promedioExamenes(examenes));
/*

3. Calcular el área de un rectángulo*/

function areaRectangulo(base, altura) {
	let texto = "El de un rectangulo es: ";
	let resultado = base * altura;
	return texto + resultado;
}
console.log(areaRectangulo(2, 8));

/*
4. Calcular el área de un triángulo*/
function areaTriangulo(base, altura) {
	let texto = "El de un Triangulo es: ";
	let resultado = (base * altura) / 2;
	return texto + resultado;
}
console.log(areaTriangulo(2, 8));

/*
5. Calcular el área de una circunferencia*/
function areaCircunferencia(radio) {
	let texto = "El de la Circunferencia es: ";
	//const pi = Math.PI; //3.1416;
	let resultado = Math.PI * Math.pow(radio, 2);
	return texto + resultado;
}
console.log(areaCircunferencia(10));

/*
6. Determinar el sueldo semanal de un trabajador basándose en sus horas
trabajadas y su salario de hora hombre*/

function sueldoBaseHoras(salario, horasTrabajadas) {
	let texto = "El salario en base a las horas trabajadas es: ";
	let diasDelMes = 30;
	let horasDelDia = 8;
	let resultado = (salario / diasDelMes / horasDelDia) * horasTrabajadas;
	return texto + resultado;
}
console.log(sueldoBaseHoras(1000, 8));
/*
7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero.
Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas,
pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a
resolver el problema, determinando cuantas pulgadas debe pedir con base en
los metros que requiere. Represéntelo mediante el diagrama de flujo y el
pseudocódigo (1 pulgada = 0.0254 m).*/

function convertirMetrosAPulgadas(metros) {
	let texto = "El equivalente de metros a pulgadas es: ";
	let pulgada = 0.0254;
	let resultado = metros / pulgada;
	return texto + resultado;
}
console.log(convertirMetrosAPulgadas(1));

/*
8. Una empresa importadora desea determinar cuántos dólares puede adquirir
con equis cantidad de dinero peruano*/

function convertirSolesADolares(soles, tipodecambio) {
	let texto = "La cantidad de dolares a adquirir es: ";
	let resultado = soles / tipodecambio;
	return texto + resultado;
}
console.log(convertirSolesADolares(10, 3.8));
/*
9. Una empresa que contrata personal requiere determinar la edad de las
personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se
les pregunta el año en que nacieron*/

function edad(anioNacimiento) {
	let texto = "La edad es: ";
	let fecha = new Date();
	let anioActual = fecha.getFullYear();
	let resultado = anioActual - anioNacimiento;
	return texto + resultado;
}
console.log(edad(1976));
/*
10. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la
edad de la persona de menor edad*/
function menor(arrpersonas) {
	let edad = [];
	for (const p of arrpersonas.amigosArray) {
		edad.push(p.edad);
	}
	//console.log(edad2);

	let name = [];
	for (const p of arrpersonas.amigosArray) {
		name.push(p.name);
	}
	//console.log(name2);

	let minimo = Math.min.apply(null, edad);
	for (var i = 0; i <= 100; i++) {
		if (edad[i] == minimo) {
			console.log(
				"El menor es " + name[i] + " con " + minimo + " años de edad."
			);
		}
	}
}

let persona = {
	amigosArray: [
		{ name: "Lulu", edad: 20 },
		{ name: "Ytalo", edad: 21 },
		{ name: "Kathya", edad: 22 },
	],
};
menor(persona);

/*
11. Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un
año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5
años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo
y represéntelo ,que permita determinar el bono que recibirá un trabajador*/
function bono(anios) {
	let texto = "El bono a recibir por su tiempo en la compañia es: ";
	let resultado = 0;
	if (anios >= 1 && anios < 2) {
		resultado = 100;
	} else if (anios >= 2 && anios < 3) {
		resultado = 200;
	} else if (anios >= 3 && anios < 4) {
		resultado = 300;
	} else if (anios >= 4 && anios < 5) {
		resultado = 400;
	} else if (anios >= 5 && anios < 6) {
		resultado = 500;
	} else if (anios >= 6) {
		resultado = 1000;
	}
	return texto + resultado;
}
console.log(bono(4));
/*
12. Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual
durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido
en cada uno de los 6 años? Realice el algoritmo y representan la solución,
utilizando el ciclo apropiado*/
function salario(sueldo, incrementoAnual, anios) {
	let texto = "El salario en el año ";

	var i;
	for (i = 0; i <= anios; i++) {
		console.log(texto + i + " " + sueldo);
		sueldo = sueldo + sueldo * incrementoAnual;
	}
}
salario(1500, 0.1, 6);

/*
13. Realice un algoritmo para leer las calificaciones de N alumnos y determine el
número de aprobados y reprobados*/
function calificaciones(notas) {
	let textoA = "La cantidad de aprobados es: ";
	let textoD = "La cantidad de desaprobados es: ";
	let cantidad = notas.length;
	let notaAprobatoria = 11;
	let aprobados = 0;
	let desaprobados = 0;
	var i;
	for (i = 0; i <= cantidad - 1; i++) {
		//	console.log(notas[i]);
		if (notas[i] >= notaAprobatoria) {
			aprobados += 1;
		} else {
			desaprobados += 1;
		}
	}
	return console.log(textoA + aprobados + " y " + textoD + desaprobados);
}

let notas = [1, 2, 11, 20, 18, 19];
calificaciones(notas);

/*
14. Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea
contabilizar, de un lote de N focos, el número de focos de cada color que hay en
existencia*/

function focos(verdes, blancos, rojos) {
	let textoV = " La cantidad de verdes es: ";
	let textoB = " La cantidad de blancos es: ";
	let textoR = " La cantidad de rojos es: ";
	let textoT = " Lo que da un total de: ";
	let resultado = verdes + blancos + rojos;

	return (
		textoV + verdes + textoB + blancos + textoR + rojos + textoT + resultado
	);
}
console.log(focos(10, 11, 22));
/*
15. Realice un algoritmo para determinar si una persona puede votar con base en
su edad en las próximas elecciones
*/
function votar(edad) {
	let textoS = ` Si puede Votar ya que su edad es : ${edad} `;
	let textoN = ` No puede Votar ya que su edad es : ${edad} `;
	let resultado = "";
	if (edad >= 18) {
		resultado = textoS;
	} else {
		resultado = textoN;
	}
	return resultado;
}
console.log(votar(17));
