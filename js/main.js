
let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

window.addEventListener('popstate', e => {
    backweb();
    
});

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

function backweb() {
   
    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("menu").style.display = "none";
        document.getElementById("screen5").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        history.back();

    }
    else{
        document.getElementById("informacion").style.display = "block";
        document.getElementById("screen5").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("back").style.display = "none";
        contador=0;
        
    }};



function inicio(){
   
    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("menu").style.display = "none";
        document.getElementById("screen5").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        history.back();

    }
    else if(contador==0) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("screen5").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("back").style.display = "none"; 
        conta=0;
          
    }

    document.getElementById("side").style.display = "none"; 

};




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function servicios() {
        document.getElementById("menu").style.display = "block";
        document.getElementById("screen5").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("informacion").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=1;
        ids1();   
    };


function reserva() {
    document.getElementById("screen5").style.display = "block";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    conta=0;
    contador=1;  
    ids1();   
};

function desayuno() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("screen5").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("desayuno").scrollIntoView();
    conta=0;
    contador=1;  
    ids1();   
};

function platoscarta() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("screen5").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("platosc").scrollIntoView();
    conta=0;
    contador=1;  
    ids1();   
};

function mariscos() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("screen5").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("mariscos").scrollIntoView();
    conta=0;
    contador=1;  
    ids1();   
};

function ceviches() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("screen5").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("ceviches").scrollIntoView();
    conta=0;
    contador=1;  
    ids1();   
};

function bebidas() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("screen5").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("bebidas").scrollIntoView();
    conta=0;
    contador=1;  
    ids1();   
};

function licores() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("screen5").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("licores").scrollIntoView();
    conta=0;
    contador=1;  
    ids1();   
};

function verpedido() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("screen5").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    conta=0;
    contador=1;  
    ids1();   
};

//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("menu").style.display = "none";
        document.getElementById("screen5").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;

    }
    else{
        document.getElementById("informacion").style.display = "block";
        document.getElementById("screen5").style.display = "none";
        contador=1;

    }}

// llevar cerrar side automatico

document.querySelector('.tarjeta').addEventListener('click',()=>{
    document.getElementById("side").style.display = "none";
    conta=0;
    });

   //    menu laterl 

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;
    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "none";
            conta=0;
        }
        };

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        }; 

// formulario

document.querySelector("#enviarw").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "593994572572";
  
    let cliente = document.querySelector("#cliente").value;
    let fecha = document.querySelector("#fecha").value;
    let hora = document.querySelector("#hora").value;
    let resp = document.querySelector("#reservared");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *RedTuna Restaurante*%0A
          *Reserva*%0A
          *a Nombre de*%0A
          ${cliente}%0A
          *Fecha*%0A
          ${fecha}%0A
          *hora*%0A
          ${hora}%0A`;
  
    if (cliente === "" || fecha === ""|| hora === "" ) {
      resp.classList.add("fail");
      resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Reserva Enviada, ${cliente}`;
  
    window.open(url);
  });       

        //ALERTAS>
function save(){
    let url = `https://drive.google.com/u/0/uc?id=1RQ069VHfLNLjHR3bc5ob7Fyf_hARbi97&export=download`;
    window.open(url); 
   }
  
  function ftuser() {
      Swal.fire({
          text: 'Restaurante Seafood',
          imageUrl: 'img/rednegro.png',
          imageWidth: 100,
          confirmButtonText: 'Añadir a Contactos',
          showCloseButton: 'true',
          showCancelButton: true,
          footer: 'Galápagos Santa Cruz'
    
      
        }).then((result) => {
          if (result.isConfirmed) {
            save();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Descarga Correcta',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
  
   
  };
    
    
    
  function agregar() {
    Swal.fire({
        title: 'Función Disponible ',
        text: 'Próximamente',
        imageUrl: 'img/rednegro.png',
        imageWidth: 150,
        footer: 'Galápagos Santa Cruz'
     
})

 
};

//PRODCUTOS Desayuno>

var suma = 0;

  var agregar = ``;
  
  let amountProduct = document.querySelector('.count-product');
    
function agp1() {
    document.getElementById('title').value =  `DESAYUNO CONTINENTAL`;
    document.getElementById('description').value = `8.00`;
    cotizar2();
    
}

function agp2() {
    document.getElementById('title').value =  `DESAYUNO CON BOLON MIXTO CHICHARRON Y QUESO`;
    document.getElementById('description').value = `8.00`;
    cotizar2();
}

function agp3() {
    document.getElementById('title').value =  `DESAYUNO CON BOLON DE QUESO`;
    document.getElementById('description').value = `8.00`;
    cotizar2();
}

function agp4() {
    document.getElementById('title').value =  `DESAYUNO CON BOLON MARINERO`;
    document.getElementById('description').value = `12.00`;
    cotizar2();
}

//Sanduchez >

function agp6() {
    document.getElementById('title').value =  `SANDUCHE DE POLLO`;
    document.getElementById('description').value = `8.00`;
    cotizar2();
}

function agp7() {
    document.getElementById('title').value =  `SANDUCHE VEGETARIANO`;
    document.getElementById('description').value = `8.00`;
    cotizar2();
}

//HAMBURGUESA  >

function agp8() {
    document.getElementById('title').value =  `HAMBURGUESA`;
    document.getElementById('description').value = `8.00`;
    cotizar2();
}
function agp9() {
    document.getElementById('title').value =  `HAMBURGUESA ESPECIAL DE RES`;
    document.getElementById('description').value = `8.00`;
    cotizar2();
}
function agp10() {
    document.getElementById('title').value =  `HAMBURGESA DE PESCADO`;
    document.getElementById('description').value = `8.00`;
    cotizar2();
}
//PLATOS A LA CARTA >
function agp11() {
    document.getElementById('title').value =  `POLLO A LA PLACHA`;
    document.getElementById('description').value = `16.00`;
    cotizar2();
}
function agp12() {
    document.getElementById('title').value =  `POLLO AL AJILLO`;
    document.getElementById('description').value = `16.00`;
    cotizar2();
}
function agp13() {
    document.getElementById('title').value =  `POLLO A LA PIMIENTA`;
    document.getElementById('description').value = `16.00`;
    cotizar2();
}
function agp14() {
    document.getElementById('title').value =  `POLLO EN SALSA DE CHAMPIÑONES`;
    document.getElementById('description').value = `16.00`;
    cotizar2();
}
//PESCADOS

function agp15() {
    document.getElementById('title').value =  `PESCADO A LA PLANCHA`;
    document.getElementById('description').value = `15.00`;
    cotizar2();
}
function agp16() {
    document.getElementById('title').value =  `PESCADO EN SALSA DE AJO / COCO`;
    document.getElementById('description').value = `16.00`;
    cotizar2();
}
function agp17() {
    document.getElementById('title').value =  `PESCADO EN SALSA RED TUNA`;
    document.getElementById('description').value = `20.00`;
    cotizar2();
}

//funcion18calula


//MARISCOS

function agp19() {
    document.getElementById('title').value =  `CAMARONES AL HUERTO`;
    document.getElementById('description').value = `16.00`;
    cotizar2();
}
function agp20() {
    document.getElementById('title').value =  `CAMARANOES AGRIDULCE`;
    document.getElementById('description').value = `16.00`;
    cotizar2();
}
function agp21() {
    document.getElementById('title').value =  `CAMARONES VOLCANICOS`;
    document.getElementById('description').value = `16.00`;
    cotizar2();
}
function agp22() {
    document.getElementById('title').value =  `CAMARONES EN SALSA DE COCO`;
    document.getElementById('description').value = `16.00`;
    cotizar2();
}
function agp23() {
    document.getElementById('title').value =  `CAMARONES EN SALSA DE AJO`;
    document.getElementById('description').value = `16.00`;
    cotizar2();
}

//pulpo

function agp24() {
    document.getElementById('title').value =  `PULPO A LA PLANCHA`;
    document.getElementById('description').value = `20.00`;
    cotizar2();
}
function agp25() {
    document.getElementById('title').value =  `PULPO VOLCÁNICO`;
    document.getElementById('description').value = `20.00`;
    cotizar2();
}
function agp26() {
    document.getElementById('title').value =  `PULPO AL AJO`;
    document.getElementById('description').value = `20.00`;
    cotizar2();
}

//LANGOSTA
function agp27() {
    document.getElementById('title').value =  `LANGOSTA AL CHIMICHURRI`;
    document.getElementById('description').value = `20.00`;
    cotizar2();
}
function agp28() {
    document.getElementById('title').value =  `LANGOSTA EN SALSA DE COCO`;
    document.getElementById('description').value = `20.00`;
    cotizar2();
}

//LANGOSTA29segunelpeso

//ARROCES
function agp30() {
    document.getElementById('title').value =  `ARROZ CON CAMARÓN`;
    document.getElementById('description').value = `16.00`;
    cotizar2();
}
function agp31() {
    document.getElementById('title').value =  `CHAUFA DE CAMCARÓN`;
    document.getElementById('description').value = `16.00`;
    cotizar2();
}
function agp32() {
    document.getElementById('title').value =  `ARROZ RED TUNA`;
    document.getElementById('description').value = `20.00`;
    cotizar2();
}
function agp33() {
    document.getElementById('title').value =  `CHAUFA RED TUNA`;
    document.getElementById('description').value = `20.00`;
    cotizar2();
}

//CEVICHES--/

function agp34() {
    document.getElementById('title').value =  `CEVICHE DE PESCADO`;
    document.getElementById('description').value = `16.00`;
    cotizar2();
}
function agp35() {
    document.getElementById('title').value =  `CEVICHE DE CAMARÓN`;
    document.getElementById('description').value = `16.00`;
    cotizar2();
}
function agp36() {
    document.getElementById('title').value =  `CEVICHE RED TUNA`;
    document.getElementById('description').value = `20.00`;
    cotizar2();
}
//APERITIVOS--/

function agp37() {
    document.getElementById('title').value =  `DEDITOS DE PESCADO`;
    document.getElementById('description').value = `15.00`;
    cotizar2();
}
function agp38() {
    document.getElementById('title').value =  `AROS DE CALAMAR`;
    document.getElementById('description').value = `15.00`;
    cotizar2();
}
function agp39() {
    document.getElementById('title').value =  `DEDITOS DE POLLO`;
    document.getElementById('description').value = `15.00`;
    cotizar2();
}
function agp40() {
    document.getElementById('title').value =  `CAMARÓN REVENTADOS`;
    document.getElementById('description').value = `16.00`;
    cotizar2();
}
function agp41() {
    document.getElementById('title').value =  `CANASTAS MARINERAS`;
    document.getElementById('description').value = `16.00`;
    cotizar2();
}
//PARRILLADAS--/
function agp42() {
    document.getElementById('title').value =  `PARRILADA RED TUNA 2 PAX`;
    document.getElementById('description').value = `30.00`;
    cotizar2();
}
function agp43() {
    document.getElementById('title').value =  `PARRILLADA MAR Y TIERRA 2 PAX`;
    document.getElementById('description').value = `35.00`;
    cotizar2();
}

//BARCAZAS MARINERAS--/
function agp44() {
    document.getElementById('title').value =  `BARCAZA RED TUNA 2 PAX`;
    document.getElementById('description').value = `40.00`;
    cotizar2();
}
function agp45() {
    document.getElementById('title').value =  `BARCAZA RED TUNA 4 PAX`;
    document.getElementById('description').value = `60.00`;
    cotizar2();
}
function agp46() {
    document.getElementById('title').value =  `BARCAZA RED TUNA 6 PAX`;
    document.getElementById('description').value = `80.00`;
    cotizar2();
}
//BEBIDAS--//

function agp47() {
    document.getElementById('title').value =  `AGUA SIN GAS`;
    document.getElementById('description').value = `2.00`;
    cotizar2();
}
function agp48() {
    document.getElementById('title').value =  `AGUA CON GAS`;
    document.getElementById('description').value = `3.00`;
    cotizar2();
}
function agp49() {
    document.getElementById('title').value =  `TE HEALDO`;
    document.getElementById('description').value = `3.00`;
    cotizar2();
}
function agp50() {
    document.getElementById('title').value =  `GASEOSA`;
    document.getElementById('description').value = `3.00`;
    cotizar2();
}
//LIMONADAS--//

function agp51() {
    document.getElementById('title').value =  `LIMONADA CLASICA`;
    document.getElementById('description').value = `4.00`;
    cotizar2();
}
function agp52() {
    document.getElementById('title').value =  `CON HIERBA BUENA`;
    document.getElementById('description').value = `4.00`;
    cotizar2();
}
function agp53() {
    document.getElementById('title').value =  `LIMONADA DE FRESA`;
    document.getElementById('description').value = `4.00`;
    cotizar2();
}
function agp54() {
    document.getElementById('title').value =  `LIMONADA IMPERIAL`;
    document.getElementById('description').value = `4.00`;
    cotizar2();
}
//JUGOS--//
function agp55() {
    document.getElementById('title').value =  `JUGO DE FRUTILLA `;
    document.getElementById('description').value = `4.00`;
    cotizar2();
}
function agp56() {
    document.getElementById('title').value =  `JUGO DE PIÑA`;
    document.getElementById('description').value = `4.00`;
    cotizar2();
}
function agp57() {
    document.getElementById('title').value =  `JUGO DE MORA`;
    document.getElementById('description').value = `4.00`;
    cotizar2();
}
function agp58() {
    document.getElementById('title').value =  `JUGO DE NARANJILLA`;
    document.getElementById('description').value = `4.00`;
    cotizar2();
}
function agp59() {
    document.getElementById('title').value =  `JUGO DE MAGO `;
    document.getElementById('description').value = `4.00`;
    cotizar2();
}
function agp60() {
    document.getElementById('title').value =  `JUGO DE MARACUYA `;
    document.getElementById('description').value = `4.00`;
    cotizar2();
}
//BATIDOS--//

function agp61() {
    document.getElementById('title').value =  `BATIDO DE FRUTILLA `;
    document.getElementById('description').value = `5.00`;
    cotizar2();
}
function agp62() {
    document.getElementById('title').value =  `BATIDO DE PIÑA`;
    document.getElementById('description').value = `5.00`;
    cotizar2();
}
function agp63() {
    document.getElementById('title').value =  `BATIDO DE MORA`;
    document.getElementById('description').value = `5.00`;
    cotizar2();
}
function agp64() {
    document.getElementById('title').value =  `BATIDO DE NARANJILLA`;
    document.getElementById('description').value = `5.00`;
    cotizar2();
}
function agp65() {
    document.getElementById('title').value =  `BATIDO DE MAGO `;
    document.getElementById('description').value = `5.00`;
    cotizar2();
}
function agp66() {
    document.getElementById('title').value =  `BATIDO DE MARACUYA `;
    document.getElementById('description').value = `5.00`;
    cotizar2();
}

//CAFETERÍA--//
function agp67() {
    document.getElementById('title').value =  `TÉ`;
    document.getElementById('description').value = `2.00`;
    cotizar2();
}
function agp68() {
    document.getElementById('title').value =  `CAFÉ AMERICANO`;
    document.getElementById('description').value = `3.00`;
    cotizar2();
}
function agp69() {
    document.getElementById('title').value =  `CAFE EXPRESO`;
    document.getElementById('description').value = `2.50`;
    cotizar2();
}
function agp70() {
    document.getElementById('title').value =  `CAFE LATE`;
    document.getElementById('description').value = `3.00`;
    cotizar2();
}
function agp71() {
    document.getElementById('title').value =  `CHOCOLATE`;
    document.getElementById('description').value = `3.00`;
    cotizar2();
}
function agp72() {
    document.getElementById('title').value =  `CAFE HELADO`;
    document.getElementById('description').value = `4.00`;
    cotizar2();
}
function agp73() {
    document.getElementById('title').value =  `CHOCOLATE HELADO`;
    document.getElementById('description').value = `4.00`;
    cotizar2();
}
//--//licores

function agp74() {
    document.getElementById('title').value =  `CERVEZA CLUB PEQUEÑA`;
    document.getElementById('description').value = `4.00`;
    cotizar2();
}
function agp75() {
    document.getElementById('title').value =  `CERVEZA PILSENER PEQUEÑA`;
    document.getElementById('description').value = `4.00`;
    cotizar2();
}
function agp76() {
    document.getElementById('title').value =  `CERVEZA CLUB GRANDE`;
    document.getElementById('description').value = `6.00`;
    cotizar2();
}
function agp77() {
    document.getElementById('title').value =  `CERVEZA ARTESANAL`;
    document.getElementById('description').value = `6.00`;
    cotizar2();
}
function agp78() {
    document.getElementById('title').value =  `CERVEZA CHELADAS`;
    document.getElementById('description').value = `6.00`;
    cotizar2();
}

function agp79() {
    document.getElementById('title').value =  `CERVEZA MICHELADAS`;
    document.getElementById('description').value = `6.00`;
    cotizar2();
}

//COCTELES//


function agp80() {
    document.getElementById('title').value =  `COCTEL SEXO EN LA PLAYA`;
    document.getElementById('description').value = `7.00`;
    cotizar2();
}
function agp81() {
    document.getElementById('title').value =  `MOJITO`;
    document.getElementById('description').value = `7.00`;
    cotizar2();
}
function agp82() {
    document.getElementById('title').value =  `CAIPIRIÑA`;
    document.getElementById('description').value = `7.00`;
    cotizar2();
}
function agp83() {
    document.getElementById('title').value =  `CUBA LIBRE`;
    document.getElementById('description').value = `7.00`;
    cotizar2();
}
function agp84() {
    document.getElementById('title').value =  `MARGARITA`;
    document.getElementById('description').value = `8.00`;
    cotizar2();
}
function agp85() {
    document.getElementById('title').value =  `DAIQUIRI`;
    document.getElementById('description').value = `7.00`;
    cotizar2();
}
function agp86() {
    document.getElementById('title').value =  `TOM COLLING`;
    document.getElementById('description').value = `8.00`;
    cotizar2();
}
function agp87() {
    document.getElementById('title').value =  `GYN TONIC CLASICO`;
    document.getElementById('description').value = `7.00`;
    cotizar2();
}
function agp88() {
    document.getElementById('title').value =  `VODKA TONIC`;
    document.getElementById('description').value = `7.00`;
    cotizar2();
}
function agp89() {
    document.getElementById('title').value =  `RON TONIC`;
    document.getElementById('description').value = `7.00`;
    cotizar2();
}

      function msjcarrito() {
        Swal.fire({
            icon: 'success',
            showConfirmButton: false,
            text: 'Agregado al Carrito',
            timer: 500
          });
      
       
      }

      function cotizar2() {
        Swal.fire({
            imageUrl: 'img/rednegro.png',
            imageWidth: 150,
            title: 'Mi Pedido',
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Agregar al Pedido',
          })
          .then((result) => {
            if (result.isConfirmed) {
              saveTask();
              msjcarrito();
            }else if (result.dismiss) {
                document.getElementById('formTask').reset();
              }
          })
      
        
      };
      
    
      function saveTask(e) {
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
      
      
        let task = {
          title,
          description
        };
      
        if(localStorage.getItem('tasks') === null) {
          let tasks = [];
          tasks.push(task);
          localStorage.setItem('tasks', JSON.stringify(tasks));
        } else {
          let tasks = JSON.parse(localStorage.getItem('tasks'));
          tasks.push(task);
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
      
        getTasks();
        document.getElementById('formTask').reset();
      
      }
      
      var index = 0; 
      
      function deleteTask(title) {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        for(let i = 0; i < tasks.length; i++) {
          if(tasks[i].title == title) {
            tasks.splice(i, 1);
            document.getElementById("numer").textContent = i ;
            document.getElementById("numer2").textContent = i ;
       
          }
        }
        
        localStorage.setItem('tasks', JSON.stringify(tasks));
        getTasks();
      }
      

    

      
      var index2 = '';
         
      function getTasks() {
        if (localStorage.getItem('tasks') === null) {
            console.log('sinproductos');
        } else {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            let tasksView = document.getElementById('tasks');
            tasksView.innerHTML = '';
    
            // Variable para almacenar la suma de los valores numéricos de description
            let totalSum = 0;
    
            for (let i = 0; i < tasks.length; i++) {
                let title = tasks[i].title;
                let description = tasks[i].description;
    
                // Utilizar una expresión regular para encontrar todos los números (incluyendo decimales) en description
                let numbers = description.match(/[-]?\d+(\.\d+)?/g);
    
                // Sumar los valores numéricos y agregarlos al totalSum
                if (numbers) {
                    totalSum += numbers.reduce((acc, num) => acc + parseFloat(num), 0);
                }
    
                index2 = i + 1;
                document.getElementById("numer").textContent = index2;
                document.getElementById("numer2").textContent = index2;
                tasksView.innerHTML += `<div class="cardp">
                    <div class="card-body">
                      <p class="items">${title} - $ ${description}
                      <a href="javascript:deleteTask('${title}')"><span class="fa fa-trash"></span ></a>
                      </p>
                    </div>
                  </div>`;
            }
    
            // Mostrar la suma total con un cero más de decimal
            let totalWithExtraDecimal = totalSum.toFixed(2);
            document.getElementById("totalsuma").textContent =totalSum.toFixed(2);
            
        }
    };
    
      
    function whatsapp() {
      
        let allTasks = "";
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    
    for (let i = 0; i < tasks.length; i++) {
      allTasks +=  "Producto:" + tasks[i].title + " - Precio $ " + tasks[i].description + " / " + "\n";
    }
    
           clearLocalStorage();
           clearTasks();
    };
    
      
      
      
      
       
      function clearLocalStorage() {
        localStorage.clear()
        ;
      
      }
      
      function clearTasks() {
        localStorage.removeItem('tasks');
        location.reload();
        getTasks();
      
      }
      
    
      getTasks();
      
    
    
// Mi PEDIDO

document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  let items = document.getElementById("numer2").textContent;
   if (items == 0 ){
    console.log('noenvia')
   }else {
    let allTasks = "";
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    
    for (let i = 0; i < tasks.length; i++) {
      allTasks +=  "Producto:" + tasks[i].title + " Precio $ " + tasks[i].description + " / " + "\n";
    }
//INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
let telefono = "593994572572";
let name = document.querySelector("#namep").value;
let mesa = document.querySelector("#mesa").value;
let fopago = document.querySelector("#formapago").value;
let resp = document.querySelector("#Pedidot");
let productos = allTasks ;
let totalmenu = document.getElementById("totalsuma").textContent ;

resp.classList.remove("fail");
resp.classList.remove("send");

let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
      *Red Tuna Restaurante*%0A
      *Datos del Pedido*%0A
      *Cliente*%0A
      ${name}%0A
      *Mesa*%0A
      ${mesa}%0A
      *Forma de Pago*%0A
      ${fopago}%0A
      *Mi Pedido*%0A
      ${productos}%0A
      *Costo Total*%0A
      $${totalmenu}%0A`;
      

if (name === "" || mesa === "" || fopago === "" ) {
  resp.classList.add("fail");
  resp.innerHTML = `Espera, ${name} faltan algunos Datos `;
  return false;
}
resp.classList.remove("fail");
resp.classList.add("send");
resp.innerHTML = `Tu Pedido Fue Enviada, ${cliente}`;
window.open(url);
clearLocalStorage();
clearTasks();

   }  
  }); 
        
     


