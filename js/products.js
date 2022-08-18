
let product = [];

function showProductList (array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.products.length; i++){ 
        let category = array.products[i];
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




document.addEventListener("DOMContentLoaded", function(e){
getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productArray = resultObj.data;
            showProductList(productArray);
        }
    });
});


