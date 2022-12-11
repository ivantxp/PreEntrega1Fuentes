
function control_ingreso(texto_1er_prompt, cantidad_caracteres, texto_error){
    let primer_prompt = prompt( texto_1er_prompt);
    while( primer_prompt == "" || primer_prompt.length > cantidad_caracteres ){
        primer_prompt = prompt( texto_error + cantidad_caracteres + " caracteres");
    }
    return primer_prompt;
}

function nombre(){
    let ingreso_nombre = control_ingreso( "hola como te llamas", 10, "debe ingresar un nombre que no supere los ");
    alert("bienvenido " + ingreso_nombre + " a Fast Ice Cream" );
    return ingreso_nombre;
}

function compra(){
    let quiere_comprar = prompt(nombre_usuario + " quieres comprar un helado?");
    while(quiere_comprar != "si"  && quiere_comprar != "no"  ){
        quiere_comprar = prompt(nombre_usuario + " debe ingresar si o no");
    }
    if(quiere_comprar =="si"){
        let confirma_compra = "no"
        let sabor = prompt( "los sabores que teneos son: chocolate, frutilla, dulce de leche, naranja, vainilla");
        while(confirma_compra != "si"){
            while (sabor != "chocolate" && sabor != "frutilla" && sabor != "dulce de leche" && sabor != "naranja" && sabor != "vainilla" ){
                sabor = prompt ("no contamos con el sabor ingresado, lo que tenemos son chocolate, frutilla, dulce de leche, naranja, vainilla ");
            }

            
            confirma_compra = "si";  
        } 
        alert("compro un helado de " + sabor);
    }else{
        alert("agradesemos tu visita " )
    }
}

let nombre_usuario = nombre() 

compra()
/* function nombre(){
    let ingreso_nombre = prompt(" hola, como te llamas?")
    while ( ingreso_nombre == "" || ingreso_nombre.length > 10 ){
        ingreso_nombre = prompt("debe ingresar un nombre que no supere los 10 caracteres")
    }
    alert("bienvenido " + ingreso_nombre + " a Fast Ice Cream" )
}
    
nombre() */


/* 

compra() */