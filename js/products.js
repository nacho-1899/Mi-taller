let product = [];

function showProductList (array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let category = array[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ category.name +`</h4>
                        <h5>`+ category.currency +"-"+category.cost +`</h5> 
                        <p> `+ category.description +`</p> 
                        </div>
                        <small class="text-muted">` + category.soldCount + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }
}

function filtrar(array){
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let listaFiltrada = productArray.filter(producto=> producto.cost >= min && producto.cost <= max );
    showProductList (listaFiltrada);

}

/*function cantidad(){
    let result =[];
    result = productArray.sort(function(a, b) {
    let aCount = parseInt(a.soldCount);
    let bCount = parseInt(b.soldCount);
    if ( aCount > bCount ){ return -1; }
    if ( aCount < bCount ){ return 1; }
    showProductList(result);

    });
}
*/



document.addEventListener("DOMContentLoaded", function(e){
    // si no hay nadie logeado
    let usuario = localStorage.getItem("name");


    if (usuario == null){
     alert("No hay nadie logeado");
     location.href="login.html";
   }else{
       document.getElementById("usuario").innerHTML = usuario ;
   }

let id = localStorage.getItem("catID");
getJSONData(PRODUCTS_URL + id +".json").then(function(resultObj){

        if (resultObj.status === "ok")
        {
            productArray = resultObj.data.products;
            showProductList(productArray);
        }
    });
    document.getElementById('filtrar').addEventListener('click',()=>{
        filtrar();
    });
    document.getElementById('porcantidad').addEventListener('click',()=>{
        cantidad();
    })
    document.getElementById('cerrar').addEventListener('click',()=>{
        alert("Cerrando Sesion");
        localStorage.clear();
        window.location.href="login.html";
    })
    //fin cierre de sesion
});


