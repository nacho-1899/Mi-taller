let product = [];

// funcion obtiene el id del cada producto
function setProdID(id){
    localStorage.setItem("proID", id);
    window.location = "product-info.html"
}
function showProductList (array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let category = array[i];
        htmlContentToAppend += `
        <div onclick =setProdID(${category.id}) class="list-group-item list-group-item-action" id=`+category.id+`>
            <div class="row">
                <div class="col-3">
                    <img src="` + category.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4 id="name">`+ category.name +`</h4>
                        <h5>`+ category.currency +"-"+category.cost +`</h5> 
                        <p id ="description"> `+ category.description +`</p> 
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
// funciones de filtro
function filtrar(){
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let listaFiltrada = productArray.filter(producto=> producto.cost >= min && producto.cost <= max );
    showProductList(listaFiltrada);


}
    


// funciones de ordenes por cantidad y precio
function cantidad(){
    let result = productArray.sort((a, b) => b.soldCount- a.soldCount); 
    showProductList(result);
}
function desenente(){
    let result= productArray.sort((a, b) => b.cost- a.cost); 
    showProductList(result);
}
function ascendente(){
    let result = productArray.sort((a, b) =>a.cost- b.cost); 
    showProductList(result);
}
const boton = document.getElementById('boton');
function buscar(){
    let htmlcont= "";
    const buscar = document.getElementById('buscar');
    const texto = buscar.value.toLowerCase();
    for(let category of productArray){
        let nombre = category.name.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            htmlcont +=`
            <div onclick =setProdID(${category.id}) class="list-group-item list-group-item-action" id=`+category.id+`>
                <div class="row">
                    <div class="col-3">
                        <img src="` + category.image + `" alt="product image" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <div class="mb-1">
                            <h4 id="name">`+ category.name +`</h4>
                            <h5>`+ category.currency +"-"+category.cost +`</h5> 
                            <p id ="description"> `+ category.description +`</p> 
                            </div>
                            <small class="text-muted">` + category.soldCount + ` artículos</small> 
                        </div>
    
                    </div>
                </div>
            </div>
            `
            document.getElementById("cat-list-container").innerHTML = htmlcont;

        }
        


    }



}



document.addEventListener("DOMContentLoaded", function(e){
    // si no hay nadie logeado
    let usuario = localStorage.getItem("name");


    if (usuario == null){
     alert("No hay nadie logeado");
     location.href="login.html";
   }else{
       document.getElementById("usuario").innerHTML = usuario ;
   }

   
 //agarra catid del localstorage y ya lo une a la url para abrir categorias
    
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
    document.getElementById('masvendidos').addEventListener('click',()=>{
        cantidad();
    })
    document.getElementById('ascen').addEventListener('click',()=>{
        ascendente();
    })
    document.getElementById('descen').addEventListener('click',()=>{
        desenente();
    })
    document.getElementById('boton').addEventListener('click',()=>{
        buscar();
    }
    )
    document.getElementById('cerrar').addEventListener('click',()=>{
        alert("Cerrando Sesion");
        localStorage.clear();
        window.location.href="login.html";
    })
    //fin cierre de sesion
});
    