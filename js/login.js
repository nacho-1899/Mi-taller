function login(){
    let usuario = document.getElementById('username').value;
    let clave = document.getElementById('clave').value;

    if (usuario ===""  || clave ===""){
        
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("clave").style.borderColor = "red";
        document.getElementById("parrafo").innerHTML = "Ingrese su Email";
        document.getElementById("parrafo2").innerHTML = "Ingrese su Contraseña";
    }else{
       
        location.href="index.html";
        localStorage.setItem('user',usuario);
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('inicio').addEventListener('click', ()=>{
        login();
    })
});

