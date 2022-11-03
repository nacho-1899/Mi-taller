document.addEventListener("DOMContentLoaded", function(){

    let usuario = localStorage.getItem("name");
    let datosUsuario = localStorage.getItem("datitos");
    let email = localStorage.getItem("email");
    let inputEmail = document.getElementById("email");
    inputEmail.value=email;
    

        if (usuario == null){
        alert("No hay nadie logeado");
        location.href="login.html";
        }else{
        document.getElementById('usuario').innerHTML = usuario;
        }

        document.getElementById('cerrar').addEventListener('click',()=>{
            alert("Cerrando Sesion");
            localStorage.clear();
            window.location.href="login.html";
        })
    
});
function valido(){
    var datos = {
        nombre:"",
        apellido:"",
        email:"",

    };
    datos.nombre=document.getElementById('pnombre').value;
    datos.apellido=document.getElementById('papellido').value;
    datos.email=document.getElementById('email').value;
    localStorage.setItem('datitos', JSON.stringify(datos));

}

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
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