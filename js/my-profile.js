function mostrar(){
  let datosUsuario = JSON.parse(localStorage.getItem("datitos"));
  document.getElementById('pnombre').value=datosUsuario.nombre;
  document.getElementById('papellido').value=datosUsuario.apellido;
}

document.addEventListener("DOMContentLoaded", function(){

    let usuario = localStorage.getItem("name");
    let email = localStorage.getItem("email");
    let inputEmail = document.getElementById("email");
    inputEmail.value=email;
    

    
    if (usuario == null){
    alert("No hay nadie logeado");
    location.href="login.html";
    }else{
    document.getElementById('usuario').innerHTML = usuario;
    mostrar();
    }

    document.getElementById("cerrar").addEventListener('click',()=>{
        alert("Cerrando Sesion");
        localStorage.clear();
        window.location.href="login.html";
    });
});



function valido(){
    var datos = {
        nombre:"",
        apellido:"",

    };
    datos.nombre=document.getElementById('pnombre').value;
    datos.apellido=document.getElementById('papellido').value;
    localStorage.setItem('datitos', JSON.stringify(datos));
}

(function () {
    'use strict'
  
    
    var forms = document.querySelectorAll('.needs-validation')
  
    
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
          valido();
          
        }, false)
      })
  })()