const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then((json) => console.log(json))

};

const displayProduct = (products) =>{
    console.log(products);
    
};


loadProducts();