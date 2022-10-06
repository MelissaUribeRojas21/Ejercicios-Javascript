/* 1.	Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo. */

/* let primerNumero = 20;
let segundoNumero = 10;

if (primerNumero > segundoNumero) {
    console.log(primerNumero + " es mayor que " + segundoNumero);
} else{
    console.log(primerNumero + " es menor que " + segundoNumero);
} */

/* 2.	Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes. */

if (primerNumero == segundoNumero) {
    alert(primerNumero + " es igual a " + segundoNumero)
} 
else if{
    alert(primerNumero + " es diferente a " + segundoNumero)
}  

/* 3.	Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales. */

/* if (primerNumero > segundoNumero){
    alert(primerNumero + "es más grande que " + segundoNumero);
} else {
    alert(segundoNumero + " es más grande que " primerNumero);
} if (primerNumero == segundoNumero){
    alert(primerNumero + " es igual a " + segundoNumero)
}
else{
    alert(No son iguales);
} */


/* 4.	Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico. */

let tercerNumero = 5;

/* if(primerNumero < segundoNumero && primerNumero < tercerNumero) {
    console.log(primerNumero + " es el menor");
} else{
    if(segundoNumero < primerNumero && segundoNumero < tercerNumero){
        alert(segundoNumero + " es el menor")
    }else{
        alert(tercerNumero + " es el menor")
    }

} */


/* 5.	Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad. */


let personaUno = {
    Nombre: "Stella",
    edad: 52,
    altura: 160
}

let personaDos = {
    Nombre: "Vanessa",
    edad: 25,
    altura: 165
}

/* if (personaUno.altura > personaDos.altura){
    alert("La primera persona es más alta")
} else{
    alert("La segunda persona es más alta")
}

if(personaUno.edad > personaDos.edad){
    alert("La primera persona es mayor")
} else{
    alert ("La segunda persona es mayor")
} */

/* 6.	Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo. */

/* let candidato = {
    nombre: prompt("Ingrese su nombre"),
    edad: prompt("Ingrese su edad"),
    altura: prompt("Ingrese su estatura"),
    vision: prompt("Valore su nivel de visión de 1 a 10")
}

if (candidato.edad >= 18 && candidato.altura >= 150 && candidato.vision >= 8) {
    alert(candidato.nombre + " es apto para conducir")
} else{
    alert ("No es apto para conducir")
} */

/* 7.	Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. 
Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida. */

/* let usoEntrada
let comprarEntrada
let dineroDisponible

let invitado = {
    nombre: prompt("Escriba su nombre"),
    pase: prompt("¿Qué tipo de pase tiene? (VIP o normal)"),
    entrada: prompt("¿Cuenta con entrada para el evento? (si/no)")
}
if (invitado.nombre == "Melissa" || invitado.pase == "vip") {
    alert("¡Bienvenido, tienes ingreso libre!")
} else {
    If(invitado.entrada == "si" || invitado.entrada == "s" || invitado.entrada == "true"); {
        usoEntrada = prompt("¿Desea utilizar su entrada?")
    } if (usoEntrada == "si" || usoEntrada == "s" || usoEntrada == "true") {
        alert("¡Confirmamos tu ingreso, ¡bienvenido!")
    } else {
        comprarEntrada = prompt("¿Deseas comprar una entrada?")
        if (comprarEntrada == "si" || comprarEntrada == "s" || comprarEntrada == "true") {
            dineroDisponible = prompt("¿Con cuánto dinero disponible cuenta?")
        } else {
            alert("Chau, te esperamos en una próxima oportunidad")
            if (dineroDisponible >= 1000) {
                alert("¡Bienvenido, entrada adquirida")
            } else {
                alert("Lo sentimos, monto insuficiente")
            }
        }
    } */


/* 8.	Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente. */
/* 
let numeroIncognita = 5
let numeroIngresado = prompt("Ingrese un número del 1 al 10")


if (numeroIngresado == numeroIncognita) {
    alert("Ganaste, haz adivinado el numero")
} else {
    if (numeroIngresado < numeroIncognita) {
        prompt("El número ingresado es mayor, vuelve a intentarlo:")
    } if (numeroIngresado > numeroIncognita) {
        prompt("El número ingresado es menor, vuelve a intentarlo")
    } if (numeroIngresado == numeroIncognita){
        prompt("El número ingresado es mayor, vuelve a intentarlo")
    }else{
        alert("Perdiste")
    }
} 
 */


/* 9.	Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad. */
/* 
let edad = prompt("Ingrese su edad:")

if (edad <= 12) {
    alert("Usted es un infante")
} else {
    if (edad >= 13 && edad <= 18) {
        alert("usted es un adolescente")
    } else {
        if (edad >= 19 && edad <= 45) {
            alert("Usted es un joven")
        } else {
            if (edad >= 46 && edad <= 100) {
                alert("usted es un anciano")
            } else {
                if (edad > 100) {
                    prompt("¿está seguro?")
                }
            }
        }
    }
} */

/* 10.	Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa. */

prompt ("Ingrese piedra, papel o tijera:")

/* 11.	Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado. */



/* 12.	Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0. */



/* 13.	Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes */

