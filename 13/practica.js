let valorBase = prompt('Ingresar numero de 5 digitos')



if(valorBase.length == 5){

    console.log('El numero ingresado es: ' + valorBase);
    console.log('----------------------------------------');

    for (let index = 4; index < valorBase.length; index--) {
        console.log(valorBase.substring(5, index));  
        if(index === 0)
            break; 
    }
}
else
{
    console.log('El numero ingresado no es de 5 digitos');
}
