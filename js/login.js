function login(){
    let usuario = document.getElementById('username').value;
    let clave = document.getElementById('clave').value;
    let nombre = document.getElementById('name').value;

    if (usuario ===""  || clave ==="" || nombre ===""){
        
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("clave").style.borderColor = "red";
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("parrafo").innerHTML = "Ingrese su Email";
        document.getElementById("parrafo2").innerHTML = "Ingrese su Contraseña";
        document.getElementById("parrafo3").innerHTML = "Ingrese su Nombre";
        
        


    }else{
        localStorage.setItem('name',nombre);
        location.href="index.html";
        
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('inicio').addEventListener('click', ()=>{
        login();
    })
});

