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
        btnDiv.innerHTML = `<button class="btn bg-gradient-to-r from-indigo-500 to-purple-600 border-none text-white px-6">
          Shop Now
        </button>`;

        productsContainer.append(btnDiv);
    }
    
};


loadProducts();