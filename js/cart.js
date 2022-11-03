
function finalizarCompra(){ // si faltan datos avisa 
    
    cantidad = document.getElementById('count').value;
    calle = document.getElementById('input1').value;
    numero = document.getElementById('input2').value;
    esquina= document.getElementById('input3').value;
    envio = document.querySelector('[name="r"]').checked;
    pago = document.querySelector('[name="pago"]').checked;
    opcion1 = document.getElementById('tarjeta').checked;
    opcion2 = document.getElementById('selecTransferencia').checked;
    errorlHTML= document.getElementById('error')

    if(cantidad === "" || cantidad <=0 || calle === ""|| numero ==="" || esquina === "" || envio === false || pago === false  ){
        document.getElementById('count').style.borderColor = "red";
        document.getElementById('input3').style.borderColor = "red";
        document.getElementById('invalidesquina').innerHTML = "Debes ingresar nombre de la calle."
        document.getElementById('input2').style.borderColor = "red";
        document.getElementById('invalidnumero').innerHTML = "Debes ingresar nombre de la numero."
        document.getElementById('input1').style.borderColor = "red";
        document.getElementById('invalidcalle').innerHTML = "Debes ingresar nombre de la esquina."
        document.getElementById('envioincorrecto').innerHTML="Dene seleccionar un envio"
        document.getElementById('invalidaopcion').innerHTML= "Debe seleccionar una forma de pago ";

    }else{
        document.getElementById('exito').style.display = 'block';
    }
}

function formaPago(){ // boton guardar del modal de pago, selecciona la forma de pago
    document.getElementById('seleccion').style.display = 'none';
    valor1 = document.getElementById('tarjeta');
    if(valor1.checked === true){
        document.getElementById('selecionado').innerHTML="Pago con Tarjeta."
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
            productArray = resultObj.data.articles;
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




