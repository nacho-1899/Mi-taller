function subTotal(){ // muestra el subtotal cuando cambia la cantidad
    let subtotal = 0;
    subtotal = parseInt((document.getElementById("count").value)*(productArray[0].unitCost));
    document.getElementById("sub").innerHTML=subtotal;
    

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
    





});



