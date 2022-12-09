


function nombre(){
    let datos_nombre = prompt("hola como te llamas")
    if( datos_nombre == ""){
        while(datos_nombre === ' '){
            datos_nombre = window.prompt("debe ingresar un nombre")
        }
    }else{
        while(datos_nombre.length > 10){
            datos_nombre = prompt("el nombre no puede contener mas de 10 caracteres")
        }
    }
    console.log(datos_nombre);
    alert ("bienvenido a Fast Ice Cream " + datos_nombre)

}

nombre()