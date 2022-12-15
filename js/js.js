
function control_ingreso(texto_1er_prompt, cantidad_caracteres, texto_error){
    let primer_prompt = prompt( texto_1er_prompt);
    while( primer_prompt == "" || primer_prompt.length > cantidad_caracteres ){
        primer_prompt = prompt( texto_error + cantidad_caracteres + " caracteres");
    }
    return primer_prompt;
}

function Valor_si_no(pregunta){
    let si_no = prompt(nombre_usuario + pregunta);
    while(si_no != "si" && si_no  != "no" ){
        si_no = prompt(nombre_usuario + " debe ingresar si o no para saber");
    }
    return si_no
}

function nombre(){
    let ingreso_nombre = control_ingreso( "hola como te llamas", 10, "debe ingresar un nombre que no supere los ");
    alert("bienvenido " + ingreso_nombre + " a Fast Ice Cream" );
    return ingreso_nombre;
}

let costo_helado = 100;
function compra(){
    if(Valor_si_no(" quieres comprar un helado?") =="si"){
        let cantidad_helados = 0;
        let sabor = prompt( "los sabores que teneos son:\n -chocolate, \n-frutilla, \n-dulce de leche, \n-naranja, \n-vainilla. \n escribe el sabor que queires ");
        let sumar_pedido = "";
        do{
            do{
                while (sabor != "chocolate" && sabor != "frutilla" && sabor != "dulce de leche" && sabor != "naranja" && sabor != "vainilla" ){
                    sabor = prompt ("no contamos con el sabor ingresado, lo que tenemos son:\n -chocolate, \n-frutilla, \n-dulce de leche, \n-naranja, \n-vainilla");
                }
                cantidad_helados = Number(prompt("cada helado de " + sabor + " cuesta:" + costo_helado + " cuantos quiere?"))
                let pedido = cantidad_helados + " helado de " + sabor + "a un costo de "+ costo_helado;
                sumar_pedido = sumar_pedido + pedido;
                alert("compro : \n" + "*" + sumar_pedido);
            }while (Valor_si_no(" quieres comprar mas helado de otro sabor?") =="no")
        }while( Valor_si_no(" quieres confirmar su compra") == "no")
        alert( "el valor de su compra es " + cantidad_helados * costo_helado )
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