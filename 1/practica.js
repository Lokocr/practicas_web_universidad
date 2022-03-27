let dia = parseInt( prompt("Indique le dia de la semana"));
let diaLetras = "";
console.log(dia)

switch (dia) {
    case 1:
        diaLetras = "Lunes";
        break;
    case 2:
        diaLetras = "Martes";
        break;
    case 3:
        diaLetras = "Miercoles";
        break;
    case 4:
        diaLetras = "Jueves";
        break;
    case 5:
        diaLetras = "Viernes";
        break;
    case 6:
        diaLetras = "Sabado";
        break;
    case 7:
        diaLetras = "Domingo";
        break;
    default:
        diaLetras = "No es un dia de la semana";
        break;
        
}

console.log(diaLetras);