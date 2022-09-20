
// imagenes del producto
function showProductGallery(product){ 
    let prodContent ="";

    for(let i=0 ; i < product.length; i++){
        let products=[i];
        prodContent += ` 
        <div class ="col-lg-3 col-md-4 col-6"> 
            <div class ="d-block mb-4 h-100">
                    <img class="img-fluid img thumbnail img-fit" src="${product[i]}" alt="product images">
             </div>
        </div>
        `
        console.log(product.images);
        document.getElementById("productImagesWrapper").innerHTML = prodContent;
        




    }
}
// funcion para que coloque las estrellas segun json
function points(star){
    var stars = " ";
   for(let i = 1; i <= 5; i ++) {
       if (i<= star){
       stars  += '<i class="fas fa-star" ></i>'; //icono estrella llena
       }else{
            stars += '<i class="far fa-star"></i>';//icono contorno estrella
       }
      }
     return stars
        
   };

// muestro los comentarios

function mostrar(){
    let filas = "";
    for(let elementos of productc){
        filas+= `<li class="list-group-item">
        <p>`+ elementos.user + " - " + elementos.dateTime + " "+points(elementos.score)+`</p>
         ${elementos.description}</li>`;
    
    }
    document.getElementById('contenedor').innerHTML=filas;


}

document.addEventListener("DOMContentLoaded", function(e){ // creo dom
    let usuario = localStorage.getItem("name");


    if (usuario == null){
     alert("No hay nadie logeado");
     location.href="login.html";
   }else{
       document.getElementById("usuario").innerHTML = usuario ;
   }

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
            showProductGallery(product.images);
            console.log(product.images);
        }
            
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL + id +".json").then(function(resultObj){
        if(resultObj.status=== "ok"){
            productc = resultObj.data;
            mostrar();
        }
    })
    

    document.getElementById('cerrar').addEventListener('click',()=>{
        alert("Cerrando Sesion");
        localStorage.clear();
        window.location.href="login.html";
    })
    

    


});

   
