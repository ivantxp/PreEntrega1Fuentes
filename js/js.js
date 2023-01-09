let helados = [
    {id:1,
    categoria: "cremas",
    sabor: "crema Granizada",
    descripcion:"helado de crema granizada con trozos de chocolate",
    },
    {id:2,
    categoria: "cremas",
    sabor: "coco con dulce deleche",
    descripcion:"helado elaborado con coco macerado, veteado con dulce de leche natural",
    },
    {id:3,
    categoria: "cremas",
    sabor: "Crema Tramontana",
    descripcion:"helado de crema america veteado con dulcedeleche natural y sembrado con micro galletitas crocantes bañadas en chococlate",
    },
    {id:4,
    categoria: "cremas",
    sabor: "crema con avellanas y cacao",
    descripcion:"crema blanca veteada con mezcla de avellanas y chocolate",
    },
    {id:5,
    categoria: "cremas",
    sabor: "cremas con pasas al Ron",
    descripcion: "helado de vainilla sembrado con pasas de uva macerado al ron"
    },
    {id:6,
    categoria: "cremas",
    sabor: "Vainilla",
    descripcion:"helado elaborado con vainilla natural de Madagascar",
    },
    {id:7,
    categoria: "cremas",
    sabor: "Tiramisu",
    descripcion:"helado inspirado en el tradicional postre italiano",
    },

    //************************************************************* */

    {id:8,
    categoria: "chocolates",
    sabor: "chocolate",
    descripcion:"Helado de chocolate clasico elaborado con  lps mejores cacaos sudamericanos",
    },
    {id:9,
    categoria: "chocolate",
    sabor: "chocolate almendrado",
    descripcion:"helado de chocolate sembrado con almendras suavemente tostadas",
    },
    {id:10,
    categoria: "chocolates",
    sabor: "chocolate a la italiana",
    descripcion:"helado de chocolate sembrado con pasas de uva nueces y granizadoo con trozos de chocolate",
    },
    {id:11,
    categoria: "chocolates",
    sabor: "chocolate holandes",
    descripcion:"helado de chocolate amargo con cacaos africanos procesado e los paises bajos",
    },

    //*************************************************************************** */
    {id:12,
    categoria: "dulce de leches",
    sabor: "dulce de leche",
    descripcion:"helado de dulce de leche",
    },
    {id:13,
    categoria: "dulce de leches",
    sabor: "dulce de le che granizado",
    descripcion:"helado de dulcedeleche, granizado con trozos de chocolate",
    },
    {id:14,
    categoria: "dulce de leches",
    sabor: "manjar de nuez",
    descripcion:"",
    precio:"helados de dulce de leche sembrado con nuez",
    },
       //*************************************************************************** */

    {id:15,
    categoria: "frutas al agua",
    sabor: "limon",
    descripcion:"helado de limon natural al agua",
    },
    {id:16,
    categoria: "frutas al agua",
    sabor: "frutilla",
    descripcion:"helado de frutilla natural al agua",
    },
    {id:17,
    categoria: "frutas al agua",
    sabor: "anana",
    descripcion:"helado de anana natural al agua",
    },
    {id:18,
    categoria: "frutas al agua",
    sabor: "maracuya",
    descripcion:"helado de maracuya naturañ al agua",
    },
    {id:19,
    categoria: "frutas al agua",
    sabor: "mango",
    descripcion:"refrescante helado elborado con autenticos mangos de ecuador",
    },
    //*************************************************************************** */


    {id:21,
    categoria: "frutas a la crema",
    sabor: "frutilla a la crema",
    descripcion:"helado de frutilla a la crema",
    },
    {id:22,
    categoria: "frutas a la crema",
    sabor: "frutillas con crema",
    descripcion:"helados de crema chantilly sembrado con frutillas",
    },
    {id:23,
    categoria: "frutas a la crema",
    sabor: "pasion de maracuya",
    descripcion:"elaborado sobre una base de crema americana,con equilibrado toque de queso tipo mascarpone y aderezado con pure de maracuya",
    },
    {id:24,
    categoria: "frutas a la crema",
    sabor: "lemon pie",
    descripcion:"El tradicional postre Lemon pie, hecho helado",
    },
    {id:25,
    categoria: "frutas a la crema",
    sabor: "Banana split",
    descripcion:"helado de banana a la crema, granizado con trozos de chocolate y veteado con dulce de leche natural",
    },
    {id:26,
    categoria: "frutas a la crema",
    sabor: "pasion de frutos rojos",
    descripcion:"una combiinacion de frutos rojos, sobre uan base de delicada crema, con un toque de queso tipo mascarpone",
    },

        //*************************************************************************** */

    {id:27,
    categoria: "sambayones",
    sabor: "sambayon",
    descripcion:"sambayon",
    precio:"crema helada elaborada en base a la receta italiana de dulce de sambayo",
    },
    {id:28,
    categoria: "sambayones",
    sabor: "sambayon con cerezas",
    descripcion:"helado de sambayon sembrado con cerezas enteras confitadas",
    },
    {id:29,
    categoria: "sambayones",
    sabor: "super sambayon",
    descripcion:"helado de sambayon elaborado con la receta especial de nuestro Maestro Heladero",
    }, 
]

function control_ingreso(texto_1er_prompt, cantidad_caracteres, texto_error){
    let primer_prompt = prompt( texto_1er_prompt);
    if (primer_prompt ==  null){
        primer_prompt = ""
    }
    while( primer_prompt == "" || primer_prompt.length > cantidad_caracteres ){
        primer_prompt = prompt( texto_error + cantidad_caracteres + " caracteres");
        if (primer_prompt == null){
            primer_prompt = ""
        }
    }
    return primer_prompt;
}

function valor_si_no(pregunta){
    let si_no = prompt(pregunta).toLowerCase();
    while(si_no  != "si" && si_no != "no" && si_no != null){
        si_no = prompt("Debe ingresar si o no para saber");
        console.log(si_no);
    }
    return si_no;
}

function control_numero(pregunta){
    let numero = Number(prompt(pregunta));
    while(isNaN(numero)  && numero != null){
        si_no = prompt("Debe ingresar un nuemero de la lista");
        console.log(numero);
    }
    return numero;
}
function nombre(){
    let ingreso_nombre = control_ingreso( "Hola como te llamas", 10, "debe ingresar un nombre que no supere los ");
    alert("Bienvenido " + ingreso_nombre + " a Fast Ice Cream" );
    return ingreso_nombre;
}
let formato = [ 
    {id: 1,tipo: "vasito de 250g",precio: 150},
    {id: 2,tipo: "casata de 500g",precio: 250},
    {id: 3,tipo: "resipiente termico de 1k",precio: 400},
    {id: 4 ,tipo: "resipiente termico de 2k",precio: 700},
]
let comprados= [];


let categoria_selecionada
let a =[]
helados.forEach((el)=> a.push(el.categoria))

console.log(a)
/*

2. Pedir al usuario un nombre de una película y en caso de que se encuentre en el 
array movies mostrar por pantalla la cantidad de votos que tiene.

const busqueda = prompt("ingrese nombre pelicula")
let buscado = movies.find((el) => el.title.toLocaleLowerCase() ==  busqueda.toLocaleLowerCase())


if(buscado == undefined){
    alert("pelicula no existe")
}else{
    alert(buscado.vote_average)
}
*/

// array compra debe tener------sabor ---preccio ---- cantidad-----sub total
function comprar(){
    if(valor_si_no("Quieres comprar un helado?") =="si"){
        do{
            
            let sabor 
            let tipo = 0
            let cantidad

            categoria_selecionada = prompt("las categorias de healdos que tenemos son: \n1) Cremas. \n2) chocolates. \n3) dulce de leches \n4) Frutas al agua. \n5) Frutas a la Cremas. \n6) Sambayones.\n Escriba el numero de la opcion que quiera" )
            let filtro = helados.filter((el)=>el.categoria === categoria_selecionada)
            let indece = 1
            sabor = ( prompt("los sabores que tenemos con esa categoria son: \n"+  filtro.map((el)=>{
                return indece++  + ")" +el.sabor}).join("\n") + "\n-dige el numero de cual quiere?")    )
            tipo = prompt( "Los formatos que puede elejir son: \n" + formato.map((el)=>{return el.id +  el.tipo + "-->" + el.precio }).join("\n")+"\nSeleccione una opcion") ;
            cantidad = Number(prompt("cuantos " + tipo + " quiere"))
            
            comprados.push(
                {sabor: sabor, precio: tipo, cantidad: cantidad, sub_total: tipo * cantidad
                }
            )   
        }while( valor_si_no("quiere continuar coprado?") == "si");

        console.log(comprados)
        let total =  comprados.reduce((a,el)=> a + el.sub_total,0)
        alert(total)
        alert("en su carrito tiene:\n" + comprados.map((el)=>{return el.sabor + "precio " + el.precio + "x" + el.cantidad + " = " + el.sub_total}).join("\n") + "\ntotal = " + total)
        if(valor_si_no("quiere modificar algun helemento del carrito" =="si")){

        }
    }else{
        alert("Agradesemos tu visita" );
    }
    }
let nombre_usuario = nombre()
comprar()


  /*
function comprar(){
    if(valor_si_no("Quieres comprar un helado?") =="si"){
        let tipo = 0
        let valor
        let categorias_helado
        do{
            categorias_helado = control_numero( "las categorias de healdos que tenemos son: \n1) Cremas. \n2) chocolates. \n3) dulce de leches \n4) Frutas al agua. \n5) Frutas a la Cremas. \n6) Sambayones.\n Escriba el numero de la opcion que quiera"  ) ;
        }while(categorias_helado < 0 && categorias_helado > 6 ) 
        alert(categorias_helado)
       do{
            tipo = Number(prompt( "Los formatos que puede elejir son: \n" + formato.map((el)=>{return el.id +  el.tipo + "-->" + el.precio }).join("\n")+"\nSeleccione una opcion") );
            valor = formato.some((el) => el.id == tipo )
            alert(valor)

        }while(valor == false) 
    
        
        alert(comprados); 
        }
        alert("Agradesemos tu visita" );
    }
let nombre_usuario = nombre()
comprar()*/

/* 
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

compra() */
