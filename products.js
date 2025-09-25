
const products =[{
  id: 'product-name-1',
  image: 'bioderma.png',
  name: 'Bioderma Micellar Water',
  category: 'micellar',
  rating: { 
    stars: 4.5,
    count: 39

  },
  priceCents: 1000
},{
  id:'product-name-2',
  image: 'ordinary.png',
  name: 'Ordinary Glycolic Acid 7%',
  category: 'acids',
  rating: {
    stars: 2.5,
    count:60
  }, 
  priceCents: 600
}, {
  id: 'product-name-3',
  image: 'cerave.png',
  name:' CeraVe cleanser',
  category: 'cleanser',
  rating: {
    stars:5,
    count:300
  },
  priceCents: 2000
},{
  id:'product-name-3',
  image:'ordinary.webp',
  name: 'Ordinary Cleanser',
  category: 'cleanser',
  rating: {
    stars: 4.5,
    count:760},
    priceCents: 1200
  }]
let productsHTML='';

products.forEach((product)=>{
  productsHTML += `
  <div class="product ${product.category}">  
<img src = "${product.image} alt="product picture" class="product-img">
${product.name}
<div class="price"> $${(product.priceCents/100).toFixed(2)}</div>
<div class="product-rating">
   <img src= "pics/rating-${Math.round(product.rating.stars *10)}.png" class="rating-image" alt=product raiting > <p>(${product.rating.count})</p>
   </div>
   <div>
  <label for="quantity">Quantity:</label>
  <select id="quantity" name="quantity">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>

</div>
<button class="addtocart js-addtocartbutton" data-product-id="${product.id}">Add to Cart</button>
</div>
</div>
</div>

`
})

document.querySelector('.js-product').
innerHTML = productsHTML

document.querySelectorAll('.js-addtocartbutton')
.forEach((button)=>{
button.addEventListener('click', () => {
const productId= button.dataset.productId;

let matchingItem;

cart.forEach((item)=> {
if(productId === item.productId){
matchingItem = item;
}
});

if(matchingItem) {
  matchingItem.quantity += 1
} else  {
  cart.push({
  productId: productId,
  quantity: 1
});
}
let cartQuantity = 0;
cart.forEach((item) => {
cartQuantity += item.quantity;
});

document.querySelector('.js-cartquantity')
.innerHTML= cartQuantity;

console.log(cartQuantity)
console.log(cart)
});
});
