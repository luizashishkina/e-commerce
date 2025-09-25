
function filterProducts(category){
  let products = document.querySelectorAll('.product');
  products.forEach(product=> {
    if(category === 'all' || product.classList.contains(category)) {product.classList.remove('hidden');
  } else{
    product.classList.add('hidden')
  }
  })
}

function toggleCategories(){
  const catDiv = document.getElementById("category-list");
  catDiv.classList.toggle("hidden");
}