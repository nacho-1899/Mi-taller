
document.addEventListener("DOMContentLoaded", function(e){ // creo dom

    let id = localStorage.getItem("proID"); // obtengo id del producto
    getJSONData(PRODUCT_INFO_URL + id +".json").then(function(resultObj){ // concateno todo

        if (resultObj.status === "ok"){
            product = resultObj.data; 

            let productnamehtml = document.getElementById("product"); // obtengo el elemento del html donde se inserta
            let productdescription = document.getElementById("description");
            let productcurrency = document.getElementById("currency");
            let productcost = document.getElementById("cost");
            let productcagory = document.getElementById("category");
            let productsoldCount = document.getElementById("soldCount");



            productnamehtml.innerHTML = product.name; // tomo el elemento html y le asigno un elemento del json
            productdescription.innerHTML = product.description;
            productcurrency.innerHTML = product.currency
            productcost.innerHTML = product.cost;
            productcagory.innerHTML = product.category;
            productsoldCount.innerHTML = product.soldCount;
        }
            
    });


});

// getJSON para el producto, tomo  bien datos menos la imagen. PROBAR CON HACER UNA FUNCION DE MUESTRA
// ESTAOS EN LA PARTE 2 FALTA MOSTRAR BIEN LOS DATOS.
// PARTE 1 COMPLETA