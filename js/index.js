


document.addEventListener("DOMContentLoaded", function(){
    
    let usuario = localStorage.getItem("name");
    if (usuario == null){
    alert("No hay nadie logeado");
    location.href="login.html";
    }else{
    document.getElementById('usuario').innerHTML = usuario;
    }

    document.getElementById("cerrar").addEventListener('click',()=>{
        alert("Cerrando Sesion");
        localStorage.clear();
        window.location.href="login.html";
    });
    // n

   // pregunto si no hay nadie logeado y si hay imprimo alado de cerrar sesion



    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
    document.getElementById("50921").addEventListener("click", function() {
        localStorage.setItem("prodID", 50921);
        window.location = "product-info.html"
    });

    
    

});






