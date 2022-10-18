
function subTotal(){ // muestra el subtotal en el carrito y tabla de costos
    let subtotal = 0;
    subtotal = parseInt((document.getElementById("count").value)*(productArray[0].unitCost));
    document.getElementById("sub").innerHTML=subtotal;
    document.getElementById("subtotalcost").innerHTML="USD "+ subtotal;
    let enviocost = document.getElementById("enviocost");//muestra sub total tabla costos
    let envio = porcentajeEnvio*subtotal;
    enviocost.innerHTML="USD"+envio;// muestra envio tabla de costos
    let totalCost=document.getElementById("totalCost");
    totalCost.innerHTML="USD"+(envio+subtotal);// total= subtotal+envio en tabla de costos

    
}

function showImagen(){ // muestra la imagen del producto
    let filas ="";
    for(let i = 0; i < productArray.length; i++){
        filas += `<img src="` +productArray[0].image +`"width:"25">`
        document.getElementById('imagen').innerHTML=filas;
    }
}

function showCart(){ // muestra las propiedades del producto
    let namehtml = document.getElementById("nombre");
    namehtml.innerHTML = productArray[0].name;
    let costhtml = document.getElementById("costo");
    costhtml.innerHTML = productArray[0].unitCost;
    let currencyhtml = document.getElementById("currency");
    currencyhtml.innerHTML=productArray[0].currency;
    let counthtml = document.getElementById("count")  
    counthtml.value=productArray[0].count;
    showImagen();
    subTotal();
    
    
}






document.addEventListener("DOMContentLoaded", function(){
    getJSONData(CART_INFO_URL + 25801 +".json").then(function(resultObj){

        if (resultObj.status === "ok")
        {
            productArray = resultObj.data.articles;;
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
        document.getElementById('count').addEventListener('change', ()=>{
            subTotal();

        })
        document.getElementById("premium").addEventListener("change", function () {
             porcentajeEnvio = 0.15;
            subTotal();
        });
        document.getElementById("express").addEventListener("change", function () {
             porcentajeEnvio = 0.07;
            subTotal();
        });
        document.getElementById("estandar").addEventListener("change", function () {
             porcentajeEnvio = 0.05;
            subTotal();
        });
    





});



