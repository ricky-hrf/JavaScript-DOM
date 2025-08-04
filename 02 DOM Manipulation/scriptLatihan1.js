let products = [
  {
    "nama": "barang1",
    "harga": 20000,
    "stok": 12,
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at quam nec erat facilisis tincidunt. Sed non ligula a enim facilisis aliquet."
  },
  {
    "nama": "barang2",
    "harga": 30000,
    "stok":13,
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at quam nec erat facilisis tincidunt. Sed non ligula a enim facilisis aliquet."
  },
  {
    "nama": "barang3",
    "harga": 30000,
    "stok":14,
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at quam nec erat facilisis tincidunt. Sed non ligula a enim facilisis aliquet."
  },
  {
    "nama": "Semangka",
    "harga": 50000,
    "stok":10,
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at quam nec erat facilisis tincidunt. Sed non ligula a enim facilisis aliquet."
  }
]

let produk = document.querySelector(".produk")
products.forEach(brg => {
  let card = document.createElement("div");
  card.className = "card";
  produk.appendChild(card);
  let cardHeader = document.createElement("div")
  cardHeader.className = "card-header";
  card.appendChild(cardHeader);
  let image = document.createElement("img");
  image.src = "#";
  image.alt = "#";
  image.className = "card-img";
  cardHeader.appendChild(image);
  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  card.appendChild(cardBody);
  let info = document.createElement("div")
  info.className = "info";
  cardBody.appendChild(info);
  let nama = document.createElement("span")
  nama.innerHTML = brg["nama"]
  info.appendChild(nama);

  let harga = document.createElement("span")
  harga.innerHTML = brg["harga"].toLocaleString("id-ID");
  info.appendChild(harga);

  let info2 = document.createElement("div");
  info2.className = "info2";
  cardBody.appendChild(info2);

  let stok = document.createElement("p");
  stok.innerHTML = brg['stok'];
  info2.appendChild(stok);

  let desc = document.createElement("div");
  desc.className = "desc";
  cardBody.appendChild(desc);

  let description = document.createElement("p");
  description.className = "description";
  description.innerHTML = brg["desc"]
  desc.appendChild(description);

  let cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";
  card.appendChild(cardFooter);

  let bBuy = document.createElement("button");
  bBuy.type = "submit";
  bBuy.innerHTML = "Buy";
  cardFooter.appendChild(bBuy);

  let bAdd = document.createElement("button");
  bAdd.type = "button";
  bAdd.innerHTML = "Add to Cart";
  cardFooter.appendChild(bAdd);
}
)