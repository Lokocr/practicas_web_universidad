let C = parseInt(prompt ("Introduce un numero entero entre 0 y 100"));

var mensaje1 = C >= 0 ? "El numero es positivo" : "El numero es negativo" ;
var mensaje2 = C % 2 == 0 ? "El numero es par" : "El numero es impar" ;
var mensaje3 = C % 5 == 0 ? "El numero es multiplo de 5" : "El numero no es multiplo de 5" ;
var mensaje4 = C % 10 == 0 ? "El numero es multiplo de 10" : "El numero no es multiplo de 10" ;
var mensaje5 = C > 100 ? "El numero es mayor que 100" :"El numero es menor o igual que 100";

alert(mensaje1);
alert(mensaje2);
alert(mensaje3);
alert(mensaje4);
alert(mensaje5);
