
function control_ingreso(texto_1er_prompt, cantidad_caracteres, texto_error){
    let primer_prompt = prompt( texto_1er_prompt);
    while( primer_prompt == "" || primer_prompt.length > cantidad_caracteres ){
        primer_prompt = prompt( texto_error + cantidad_caracteres + " caracteres");
    }
    return primer_prompt;
}

function valor_si_no(pregunta){
    let si_no = prompt(pregunta).toLowerCase();
    console.log(si_no)
    while(si_no  != "si" && si_no != "no" && si_no != null){
        si_no = prompt("Debe ingresar si o no para saber");
        console.log(si_no);
    }
    console.log(si_no);
    return si_no;
}

function nombre(){
    let ingreso_nombre = control_ingreso( "Hola como te llamas", 10, "debe ingresar un nombre que no supere los ");
    alert("Bienvenido " + ingreso_nombre + " a Fast Ice Cream" );
    return ingreso_nombre;
}

function compra(){
    if(valor_si_no("Quieres comprar un helado?") =="si"){
        let cantidad_helados = 0;
        let sabor = "";
        let primera_pasada = false;
        let pedido = "";
        let precio = 0;
        let costo_helado = 0;
        do{
            do{
                if (primera_pasada ==true){
                    alert("A continuacion re aremos la compra");
                    /*reseteo de variables*/
                    cantidad_helados = 0;
                    sabor = "";
                    primera_pasada = false;
                    pedido = ""; 
                    let precio = "0"; 
                }
                sabor = prompt( "Los sabores que teneos son:\n-Chocolate -- 200$\n-Frutilla -- 300$ \n-Dulce de leche -- 250$\n-Naranja -- 150$ \n-Vainilla -- 100$\n\nEscribe el sabor que quieres ").toLowerCase();
                while (sabor != null && sabor.toLowerCase()!= "chocolate" && sabor.toLowerCase() != "frutilla" && sabor.toLowerCase() != "dulce de leche" && sabor.toLocaleLowerCase() != "naranja" && sabor.toLocaleLowerCase() != "vainilla"){
                    sabor = prompt ("No contamos con el sabor ingresado, lo que tenemos son:\n -chocolate \n-frutilla \n-dulce de leche \n-naranja \n-vainilla").toLowerCase();
                }
                /* debugger */
                switch(sabor){
                    case "chocolate":  
                        costo_helado = 200;
                        break;
                    case "frutilla":
                        costo_helado = 300;
                        break;
                    case "dulce de leche":
                        costo_helado = 250;
                        break;
                    case "naranja":
                        costo_helado = 150;
                        break;
                    case "vainilla":
                        costo_helado = 100;
                        break;
                }       
                cantidad_helados = Number(prompt("Cada helado de " + sabor + " cuesta: " + costo_helado + "$ cuantos quiere?"));    
                while( cantidad_helados <= 0  || isNaN(cantidad_helados) ){ 
                    cantidad_helados = Number(prompt("Debe ingresar un numero mayor a 0"));     
                }    
                pedido = pedido + "\n" + cantidad_helados + " helados de " + sabor + " estos tendran un costo de " + cantidad_helados * costo_helado + "$";
                precio = precio + (cantidad_helados * costo_helado);
            }while( valor_si_no("A elejido:"+ pedido + "\n\nQuieres arregar mas sabores a la compra?") == "si");
            primera_pasada = true;
        }while( valor_si_no( "Va a comprar:\n" + pedido +"\nEl total de la compra sera: " + precio + "$.\n\nQuiere confirmar su compra") == "no");
        alert( "Muchas gracias "+ nombre_usuario +" por su compra" );
    }else{
        alert("Agradesemos tu visita" );
    }
}

let nombre_usuario = nombre() 

compra()
