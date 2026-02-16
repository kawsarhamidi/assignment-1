const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then((json) => displayProduct(json));

};

const displayProduct = (products) =>{
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";
    for(let product of product){
        const  btnDiv = document.createElement("div");
        btnDiv.innerHTML = ``;

        productsContainer.append(btnDiv);
    }
    
};


loadProducts();