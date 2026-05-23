const products = [
  {
    name:"iPhone 16 Pro Max",
    price:1399,
    image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200",
    specs:[
      "6.9 OLED",
      "A18 Pro",
      "512GB",
      "48MP Camera"
    ]
  },

  {
    name:"MacBook Air M3",
    price:1499,
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200",
    specs:[
      "M3 Chip",
      "16GB RAM",
      "512GB SSD"
    ]
  },

  {
    name:"iPad Pro",
    price:999,
    image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1200",
    specs:[
      "12.9-inch",
      "M4 Chip",
      "256GB"
    ]
  },

  {
    name:"Apple Watch Ultra",
    price:899,
    image:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200",
    specs:[
      "49mm",
      "GPS",
      "36h Battery"
    ]
  }
];

let cart = [];

function showPage(pageId){

  document.querySelectorAll(".page").forEach(page=>{
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

function renderProducts(){

  const container = document.getElementById("products-container");

  container.innerHTML = "";

  products.forEach((product,index)=>{

    container.innerHTML += `
      <div class="card">

        <img src="${product.image}">

        <div class="card-content">

          <h3>${product.name}</h3>

          <ul class="specs">
            ${product.specs.map(spec=>`<li>${spec}</li>`).join("")}
          </ul>

          <h2>$${product.price}</h2>

          <button class="buy-btn" onclick="addToCart(${index})">
            Купить
          </button>

        </div>

      </div>
    `;
  });
}

function addToCart(index){

  cart.push(products[index]);

  document.getElementById("cart-count").innerText = cart.length;

  renderCart();

  alert(products[index].name + " добавлен в корзину");
}

function renderCart(){

  const cartContainer = document.getElementById("cart-items");

  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach(item=>{

    total += item.price;

    cartContainer.innerHTML += `
      <div class="cart-item">

        <img src="${item.image}">

        <div>
          <h3>${item.name}</h3>
          <p>$${item.price}</p>
        </div>

      </div>
    `;
  });

  document.getElementById("total-price").innerText = total;
}

function checkout(){

  document.getElementById("success-message").innerHTML = `
    <div class="success">
      ✅ Заказ успешно оформлен!
    </div>
  `;

  cart = [];

  document.getElementById("cart-count").innerText = 0;

  renderCart();
}

renderProducts();