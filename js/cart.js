function subTotal(){
    let subtotal;
    let costo = parseInt(document.getElementById("costo"))
    let cantidad = parseInt(document.getElementById("count").value)
    subtotal = costo * cantidad;
    document.getElementById("subtotal").innerHTML=subtotal;
    console.log(cantidad)

}

function showImagen(){
    let filas ="";
    for(let i = 0; i < productArray.length; i++){
        filas += `<img src="` +productArray[0].image +`">`
        document.getElementById('imagen').innerHTML=filas;
    }
}

function showCart(){
    let namehtml = document.getElementById("nombre");
    namehtml.innerHTML = productArray[0].name;
    let costhtml = document.getElementById("costo");
    costhtml.innerHTML = productArray[0].unitCost;
    let currencyhtml = document.getElementById("currency");
    currencyhtml.innerHTML=productArray[0].currency;
    let counthtml = document.getElementById("count");
    counthtml.innerHTML=productArray[0].count;
    showImagen();
    
    
}






document.addEventListener("DOMContentLoaded", function(){
    getJSONData(CART_INFO_URL + 25801 +".json").then(function(resultObj){

        if (resultObj.status === "ok")
        {
            productArray = resultObj.data.articles;
            console.log(productArray);
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
        document.getElementById('subtotal').addEventListener('change', ()=>{
            subTotal();

        })
    





});

// parte 1 y  2 completa
// falta parte 3, no me toma los datos del input

