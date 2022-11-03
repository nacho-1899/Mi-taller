function login(){
    let email = document.getElementById('email').value;
    let clave = document.getElementById('clave').value;
    let nombre = document.getElementById('name').value;

    if (email ===""  || clave ==="" || nombre ===""){
        
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("clave").style.borderColor = "red";
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("parrafo").innerHTML = "Ingrese su Nombre";
        document.getElementById("parrafo2").innerHTML = "Ingrese su Email";
        document.getElementById("parrafo3").innerHTML = "Ingrese su Contraseña";
        
        


    }else{
        localStorage.setItem('name',nombre);
        localStorage.setItem('email',email);
        location.href="index.html";
        
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('inicio').addEventListener('click', ()=>{
        login();
    })
});

