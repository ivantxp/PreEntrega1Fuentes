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
    descripcion: "helado de vainilla sembrado con pasas de uva macerado al ron",
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
    categoria: "chocolates",
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

    {id:29,
        categoria: "sambayones",
        sabor: "sambayon",
        descripcion:"sambayon",
        precio:"crema helada elaborada en base a la receta italiana de dulce de sambayo",
        },
        {id:28,
            categoria: "sambayones",
            sabor: "sambayon",
            descripcion:"sambayon",
            precio:"crema helada elaborada en base a la receta italiana de dulce de sambayo",
            },
  /*   {id:27,
        categoria: "sambayones",
        sabor: "sambayon",
        descripcion:"sambayon con cerezas",
        precio:"crema helada elaborada en base a la receta italiana de dulce de sambayo",
    },
    {id:29,
        categoria: "sambayones",
        sabor: "sambayon",
        descripcion:"super sambayon",
        precio:"helado de sambayon elaborado con la receta especial de nuestro Maestro Heladero",
    }, */
]
alert(helados[20].sabor )
let a = helados.find((el)=> el.id ===20)

let b = helados.indexOf(a)
helados[b].sabor = "eeeee"


alert(helados[28].sabor  )

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
    }
    return si_no;
}
function control_numerico(pregunta, array){
    let numero
    do{
        numero = parseInt(prompt(pregunta))
    }while( array.some((el)=> el.id == numero) == false)
    return numero
}

function nombre(){
    let ingreso_nombre = control_ingreso( "Hola como te llamas", 10, "debe ingresar un nombre que no supere los ");
    alert("Bienvenido " + ingreso_nombre + " a Fast Ice Cream" );
    return ingreso_nombre;
}
let formatos = [ 
    {id: 1,tipo: "vasito de 250g",precio: 150},
    {id: 2,tipo: "casata de 500g",precio: 250},
    {id: 3,tipo: "resipiente termico de 1k",precio: 400},
    {id: 4 ,tipo: "resipiente termico de 2k",precio: 700},
]
let comprados= [];
let categoria_selecionada

function categorias(){
    let a =[]
    let  b= []
    helados.forEach((el)=> a.push(el.categoria))
    /* let retorno = [new Set(a)]
    return retorno   */ 
    for(let i = 0; i< a.length;i++){
        if(b.includes(a[i])==false){
            b.push(a[i])
        }
    }
    return b
} 

function comprar(){
    if(valor_si_no("Quieres comprar un helado?") =="si"){
        let edicion_pedido = "no"
        let agregar_producto = "si"
        let comprados_prompt
        do{
            if(edicion_pedido =="si"){
                let edicion_opciones 
                do{
                    edicion_opciones = Number(prompt("que tipo de edicion quiere hacer: \n 1)agregar mas producto. \n2)cambiar cantidad de un producto. \n3) borrar producto. \nEscriba el numero de la opcion"))
                }while(edicion_opciones  != 1 && edicion_opciones != 2 && edicion_opciones  != 3 && edicion_opciones != null)
                if(edicion_opciones==3){
                    agregar_producto = "no"
                    let borrado = Number(prompt("cual quiere borrar " + comprados_prompt + "diggete su numero de id")) 
                    let indece = comprados.filter((el)=>el.id==borrado)
                    comprados.splice(comprados.indexOf(indece),1)
                }else if(edicion_opciones==2){
                    agregar_producto = "no"
                    let a_cambiar = Number(prompt("cual quiere cambiar su cantidad " + comprados_prompt + "diggete su numero de id")) 
                    let cantidad_nueva = parseInt(prompt("que cantidad nueva desea?"))
                    let indece = comprados.filter((el)=>el.id==borrado)
                    
                
                }else if(edicion_opciones==1){
                    agregar_producto = "si"    
                }
            }
            if(agregar_producto =="si" ){
                do{
                    let total
                    let id_sabor 
                    let id_tipo
                    let cantidad
                    let categoria_pregunta = []

                    for(let i =0; i< categorias().length;i++){
                        categoria_pregunta.push({id:i+1,categoria: categorias()[i]})
                    }
                    categoria_selecionada =  control_numerico("las categorias de healdos que tenemos son: \n" + categoria_pregunta.map((el)=>{return el.id + ")" + el.categoria}).join("\n") + "\ndige el numero de cual quiere?", categoria_pregunta)
                    //console.log(categoria_selecionada)

                    
                    let sabores_buscados = helados.filter((el =>el.categoria == categoria_pregunta[categoria_selecionada-1].categoria))
                    //console.log(sabores_buscados)

                    id_sabor =  Number(prompt("los sabores que tenemos son: \n"+ sabores_buscados.map((el)=>{return el.id + ")" + el.sabor + "\n--->" +el.descripcion}).join("\n") +"\n seleccione un helemento por su id"))
                    
                    //id_sabor = helados.find((el)=> el.id == Number(prompt("los sabores que tenemos son: \n"+ sabores_buscados.map((el)=>{return el.id + ")" + el.sabor + "\n--->" +el.descripcion}).join("\n") +"\n seleccione un helemento por su id")))
                    //alert(helados.find((el)=>el.id == id_sabor).sabor )
                    
                    id_tipo = prompt("En que tipo de formato quiere su helado de" + helados.find((el)=>el.id == id_sabor).sabor +"\n"+ formatos.map((el)=>{return el.id + ")" + el.tipo + " " + el.precio }).join("\n") + "\n-dige el numero de cual quiere?" )
                    //alert(id_tipo)
                    //alert(formatos.find((el)=>el.id == id_tipo).tipo )

                    cantidad = prompt("Cuantas unidades de " + formatos.find((el)=>el.id == id_tipo).tipo + " quiere?" )
                    //alert(cantidad)
                    comprados.push({
                        id: id_sabor,
                        sabor: helados.find((el)=>el.id == id_sabor).sabor ,
                        tipo: formatos.find((el)=>el.id == id_tipo).tipo ,
                        precio: formatos.find((el)=>el.id == id_tipo).precio ,
                        cantidad: cantidad,
                        sub_total: cantidad * formatos.find((el)=>el.id == id_tipo).precio,
                    })
                }while( valor_si_no("quiere continuar comprado?") == "si");
            }
            comprados_prompt = comprados.map((el)=>{return "--> Id " + el.id + ") " + el.cantidad + " " + el.tipo + " sabor " + el.sabor + " precio cada uno " + el.precio + " sub total " + el.sub_total }).join("\n")
            total =  comprados.reduce((a,el)=> a + el.sub_total,0)
            edicion_pedido = valor_si_no("En su carrito tiene los siguientes productos :\n"+ comprados_prompt +"\ndesea editar su compra")
        }while(edicion_pedido=="si")
        //console.log(comprados)
        alert("Agradesemos tu compra" );
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
