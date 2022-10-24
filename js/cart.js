function finalizarCompra(){ // las que estan comentadas no funciona bien 
    cantidad = document.getElementById('count').value;
    premium = document.getElementById('premium');//
    express = document.getElementById('express');//
    estandar = document.getElementById('estandar');//
    calle = document.getElementById('calle').value;
    numero = document.getElementById('numero').value;
    esquina= document.getElementById('esquina').value;
    opcion1 = document.getElementById('tarjeta');//
    opcion2 = document.getElementById('selecTransferencia');//
    if(cantidad === "" || cantidad === 0){
        document.getElementById('count').style.borderColor = "red";
    }
    if (premium.checked == true || estandar.checked == false || express.checked == false) {// no funciona siempre muestra el cartel
        document.getElementById('envio-incorrecto').innerHTML="Debes seleccionar un tipo de envio."
    } else {
        document.getElementById('envio-incorrecto').innerHTML="";
    }
    if(calle == "" ||  calle == null ){
        document.getElementById('invalidcalle').innerHTML="Debes ingresar el nombre de la calle"
        document.getElementById('input1').style.borderColor = "red";
    }
    if (numero == "" || numero == null ){
        document.getElementById('invalidnumero').innerHTML="Debes ingresar el numero de puerta"
        document.getElementById('input2').style.borderColor = "red";
    }
    if (esquina== "" || esquina == null ){
        document.getElementById('invalidesquina').innerHTML="Debes ingresar el nombre de la esquina"
        document.getElementById('input3').style.borderColor = "red";
    } 
    if(opcion1.checked == false || opcion2 == false ){ // aparecen cuando no hay ninguna elegido pero no se cobbra el p en rejo si eleciono algo 
        document.getElementById('invalidaopcion').innerHTML="No se selecciono ninguna forma de pago"
    }
    
}

function formaPago(){ // boton guardar del modal de pago, selecciona la forma de pago
    document.getElementById('seleccion').style.display = 'none';
    valor1 = document.getElementById('tarjeta');
    if(valor1.checked == true){
        document.getElementById('selecionado').innerHTML="Pago con Trajeta."
    }else{
        document.getElementById('selecionado').innerHTML="Pago con Transefrencia." 
    }
}
function desactivarTransferencia(){// activa y desactiva los input dentro de la modal
    let input = document.getElementById("ncuenta");
    input.disabled = true;
    let tarjeta = document.getElementById("ntarjeta");
    let vencimiento = document.getElementById("vencimiento");
    let codigo = document.getElementById("codigo");
    tarjeta.disabled = false;
    vencimiento.disabled = false;
    codigo.disabled = false;

}
function desactivarTarjeta(){ //activa y desactiva los input dentro de la modal
    let tarjeta = document.getElementById("ntarjeta");
    let vencimiento = document.getElementById("vencimiento");
    let codigo = document.getElementById("codigo");
    tarjeta.disabled = true;
    vencimiento.disabled = true;
    codigo.disabled = true;
    let input = document.getElementById("ncuenta");
    input.disabled = false;
}
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
        document.getElementById("tarjeta").addEventListener("change", function () {
            
            desactivarTransferencia();
        });
        document.getElementById("selecTransferencia").addEventListener("change", function () {
            desactivarTarjeta();
            
        });
        document.getElementById("grdfordpago").addEventListener("click", function () {
            formaPago();
            
        });
        document.getElementById('finalizada').addEventListener("click", function (){
            finalizarCompra();

        });

       
});




