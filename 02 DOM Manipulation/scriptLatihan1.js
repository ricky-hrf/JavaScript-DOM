let container = document.querySelector(".container");
let produk = document.querySelector(".produk");
let card = document.querySelector(".card");

// manipulasi node
// 1. document.createElement
let newCard = document.createElement("div");
newCard.classList.add("card");
newCard.innerHTML = `
  <div class="card-header">
    <span class="nama">Produk 1</span>
    <img src="#" alt="#" class="card-img">
  </div>
  <div class="card-body">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at quam nec erat facilisis tincidunt. Sed non ligula a enim facilisis aliquet.</p>
  </div>
  <div class="card-footer">
    <form action="">
      <button type="submit">Buy</button>
      <button type="button">Add to Cart</button>
    </form>
  </div>
`;

// 2. node.appendChild()
container.appendChild(newCard);
// 3. node.insertBefore()
let newProduk = document.createElement("div");
newProduk.classList.add("produk");
newProduk.appendChild(newCard);
produk.insertBefore(newProduk, card);
