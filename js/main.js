
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
        document.getElementById("screen4").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        history.back();

    }
    else{
        document.getElementById("informacion").style.display = "block";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("back").style.display = "none";
        contador=0;
        
    }};



function inicio(){
   
    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("menu").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        history.back();

    }
    else if(contador==0) {
        document.getElementById("informacion").style.display = "block";
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
        document.getElementById("informacion").style.display = "none";
        document.getElementById("menu").style.display = "block";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=1;
        ids1();   
    };


function cotizar() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    conta=0;
    contador=1;  
    ids1();   
};

function desayuno() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("desayuno").scrollIntoView();
    conta=0;
    contador=1;  
    ids1();   
};

function sanduches() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("sanduches").scrollIntoView();
    conta=0;
    contador=1;  
    ids1();   
};

function hb() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("hambur").scrollIntoView();
    conta=0;
    contador=1;  
    ids1();   
};

function platoscarta() {
    document.getElementById("menu").style.display = "block";
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
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("mariscos").scrollIntoView();
    conta=0;
    contador=1;  
    ids1();   
};
//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("menu").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;

    }
    else{
        document.getElementById("informacion").style.display = "block";
        document.getElementById("screen4").style.display = "none";
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

// llevar arriba
       




// formulario

document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "593994572572";
  
    let cliente = document.querySelector("#cliente").value;
    let fecha = document.querySelector("#fecha").value;
    let hora = document.querySelector("#hora").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *RedTuna Restaurante*%0A
          *Solicita una Reserva*%0A
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
    
      

        
        




