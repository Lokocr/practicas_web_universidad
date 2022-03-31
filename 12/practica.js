const clave = "eureka";
let intentos = 0;
let claveIngresada = ''

do {
    if(intentos >= 3)
    {
        alert('Se han agotado los intentos.')
        break;
    }
    else
    {
        claveIngresada = prompt('Ingrese la clave de acceso.');
        console.log(claveIngresada);

        intentos += 1;
        console.info(intentos)

    }

} while (clave.localeCompare(claveIngresada));