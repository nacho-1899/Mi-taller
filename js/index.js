document.addEventListener("DOMContentLoaded", function(){
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
});




document.addEventListener("DOMContentLoaded", ()=>{
    let usuario = localStorage.getItem('user');
     if (usuario === null){
      alert("No hay nadie loggeado");
      location.href="login.html";
    }else{

    }

});

// no logro que se salga cuando refrescvo, si copio y pego la url si pero si cierro ventana no

