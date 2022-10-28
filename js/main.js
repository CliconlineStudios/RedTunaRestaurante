
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
        document.getElementById("portafolio").style.display = "none";
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
        document.getElementById("portafolio").style.display = "none";
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
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("back").style.display = "block";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=1;
        ids1();   
    };


function cotizar() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    conta=0;
    contador=1;  
    ids1();   
};




//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;

    }
    else{
        document.getElementById("informacion").style.display = "block";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("back").style.display = "none";
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
       

document.querySelector('.side')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});
document.querySelector('.portafolio')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

document.querySelector('.back')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});



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
          *Solicitud*%0A
          *Reserva a Nombre de*%0A
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
  


        document.querySelector('.side1')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });


        document.querySelector('.side3')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });
        
        function formu() {
            Swal.fire({
                title: '',
                text: 'Centro de Desarrolo Infantil',
                imageUrl: 'img/logolondres.png',
                imageWidth: 150,
                confirmButtonText: 'Inscríbete',
                showCloseButton: 'true',
                showCancelButton: true,
          
            
              }).then((result) => {
                if (result.isConfirmed) {
                    cotizar();
                
                }
              })
        
         
        };
    
    
    
    
    
      

        
        




