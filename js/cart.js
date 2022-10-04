function showCart(){
    

   

}






document.addEventListener("DOMContentLoaded", function(){
    getJSONData(CART_INFO_URL + 25801 +".json").then(function(resultObj){

        if (resultObj.status === "ok")
        {
            productArray = resultObj.articles;
            showCart(productArray);
            
        }
    });

    let usuario = localStorage.getItem("name");
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

// parte 1  falta mostrar en HTML la información del mismo

