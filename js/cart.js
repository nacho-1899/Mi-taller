function finalizarCompra(){
   // let cantidad = document.getElementById("count").value;
    //let enviop = document.getElementById("premium").value;
   // let envioe = document.getElementById("express").value;
    //let envioes = document.getElementById("estandar").value;
    let numero = document.getElementById("calle").value;
    let calle = document.getElementById("numero").value;
    let esquina = document.getElementById("esquina").value;
    if(  numero =="" || calle =="" || esquina =="" ){
        //document.getElementById("count").style.borderColor = "red";
        //document.getElementById("premium").style.borderColor = "red";
       // document.getElementById("express").style.borderColor = "red";
        //document.getElementById("estandar").style.borderColor = "red";
        document.getElementById("calle").style.borderColor = "red";
        document.getElementById("numero").style.borderColor = "red";
        document.getElementById("esquina").style.borderColor = "red";
    }else{
    }
    
    






}
function desactivarTransferencia(){
    let input = document.getElementById("ncuenta");
    input.disabled = true;
    let tarjeta = document.getElementById("ntarjeta");
    let vencimiento = document.getElementById("vencimiento");
    let codigo = document.getElementById("codigo");
    tarjeta.disabled = false;
    vencimiento.disabled = false;
    codigo.disabled = false;

}
function desactivarTarjeta(){
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
        document.getElementById("finalizada").addEventListener("click", function () {
            finalizarCompra();
            
        });

        document.getElementById("guardar").addEventListener("click", function () {
            let desaparece = document.getElementById("seleccion");
            desaparece.style.display= none;
            
            //let modal = document.getElementById("EjemploModal");
            //modal.style.display="inherit"
            //let tarjeta = document.getElementById("tarjeta")
            //let trasferencia = document.getElementById("pago")   
           // if (tarjeta == true){
           //     opcion = document.getElementById("selecionado")
            //    opcion.innerHTML == "Tarjeta de credito"
            //    let desaparece = document.getElementById("seleccion");
            //    desaparece..style.display= none;
           // }else{
            //    trasferencia == true;
            //    opcion = document.getElementById("selecionado")
           //     opcion.innerHTML == "Transferencia bancaria"
            //    let desaparece = document.getElementById("seleccion");
            //    desaparece.style.display = none;        
            
        });
});
// falta que guarde la opcion tarjeta o trasferencia y la agregre al htmml



