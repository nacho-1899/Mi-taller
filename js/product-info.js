function setProdID(id){
    localStorage.setItem("proID", id);
    window.location = "product-info.html"
}
function agregarCarrito(){// intenco obtener datos para pasarlo al carrito
    let nombrep = document.getElementById('product').value;
    localStorage.setItem('namep',nombrep);
}

function showRelatedProducts(product){
    let filas ="";
    for(let i = 0; i < product.length; i++){
        let category = product[i];
        filas += `
        <div onclick =setProdID(${category.id}) class="list-group-item list-group-item-action" id=`+category.id+`>
            <div class="row">
                <div class="col-6">
                    <img src="` + category.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4 id="name">`+ category.name +`</h4>
                        
                        </div>
                    </div>
        
                </div>
            </div>
        </div>
        `
    document.getElementById("relatedProducts").innerHTML= filas;
    

    }
}
// imagenes del producto primera con active y segunda sin active para el carusel
function showProductGallery(product){ 
    let prodContent ="";

    for(let i=0 ; i < product.length; i++){
        if(i==1){
            prodContent +=` 
        <div class="carousel-item active">
        <img src="${product[i]}" class="d-block w-10" alt="...">
      </div>
        `
        }else{
            prodContent +=` 
        <div class="carousel-item">
        <img src="${product[i]}" class="d-block w-10" alt="...">
      </div>
        `}
       
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
function agregar(){
    let usuario = {};
     usuario.description = document.getElementById('item').value; //[object HTMLInputElement]
     usuario.score = document.getElementById('puntaje').value;
     
     usuario.dateTime = dia();
     usuario.user = localStorage.getItem('name');
     productc.push(usuario);
     mostrar(usuario);
   
}
function dia(){
    let hoy = new Date();
    let dia = hoy.getDate();
    let mes = hoy.getMonth() +1 ;
    let año = hoy.getFullYear();
    let hora = hoy.getHours();
    let minutos = hoy.getMinutes();
    let segundos = hoy.getSeconds();
    return año + "-"+ mes+"-"+dia+" "+hora+":"+minutos+":"+segundos;
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
            showRelatedProducts(product.relatedProducts);
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
    document.getElementById('agregar').addEventListener('click', ()=>{
        agregar();
    })
    document.getElementById('acarrito').addEventListener('click', ()=>{
        agregarCarrito();
    })
    

    


});

