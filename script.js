import model from "./products.js";

const filterButton = document.querySelector(".filter-button");
const inputs = document.querySelectorAll("input");
const cards = document.querySelector(".cards");
let shoppingCart = [];
const counter = document.querySelector(".counter");
const productsList = document.querySelector(".products-list");
const showList = document.querySelector(".cart-image");
const shoppingList = document.querySelector(".shopping-list");
const closeShoppingList = document.querySelector(".exit-button");

const createCard = (titlu, descriere, pret) => {
  cards.innerHTML += `
  <div class="shopping-card">
  <div class="product-image">
    <img src="./img/adidasi.jpg" class="product-card-image" />
  </div>
  <div class="info">
    <p class="title"><b>${titlu}</b></p>
    <p>Descriere: ${descriere}</p>
    <p>Pret: ${pret}</p>
    <button class="cos">Adauga</button>
  </div>
</div>
  `;
};

setTimeout(() => {
  const addButton = document.querySelectorAll(".cos");
  addButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      shoppingCart.push(model[index]);
      counter.innerText = shoppingCart.length;
      counter.style.opacity = "100%";
    });
  });
}, 10);


const createItems = ()=>{
  productsList.innerHTML = "";
  shoppingCart.forEach((item, index) => {
    productsList.innerHTML += `
    <div class="shopping-product">
    <div class="shopping-product-image">
      <img src="./img/adidasi.jpg" class="shopping-image">
    </div>
    <div class="shopping-product-info">
      <p>Nume: ${item.titlu}</p>
      <span>Pret: ${item.pret}</span>
    </div>
    <div class="delete-product-image">
      <img class="delete-product-image-img" src="https://img.icons8.com/external-flat-icons-inmotus-design/48/000000/external-Cancel-ui-flat-icons-inmotus-design.png"/>
    </div>
  </div>
    `;
  });
  
  setTimeout(() =>{
    const deleteItem = document.querySelectorAll(".delete-product-image-img");
    deleteItem.forEach((button, index) =>{
      button.addEventListener("click", ()=>{
        deleteProduct(index);
        if(shoppingCart.length !== 0){
          createItems();
        } else{
          shoppingList.style.visibility = "hidden";
        }
      })
    })
  }, 10)
}

const deleteProduct = (itemIndex) => {
  shoppingCart = shoppingCart.filter((_, index) => index !== itemIndex);
}

model.forEach((card, index) => {
  createCard(card.titlu, card.descriere, card.pret, index);
});

filterButton.addEventListener("click", () => {
  cards.innerHTML = "";
  model.forEach((card) => {
    if (+inputs[0].value <= card.pret && card.pret <= +inputs[1].value) {
      createCard(card.titlu, card.descriere, card.pret);
    }
    if (inputs[2].checked) {
      if (card.gen === inputs[2].value) {
        createCard(card.titlu, card.descriere, card.pret);
      }
    }
    if (inputs[3].checked) {
      if (card.gen === inputs[3].value) {
        createCard(card.titlu, card.descriere, card.pret);
      }
    }
    if (card.size === +inputs[4].value) {
      createCard(card.titlu, card.descriere, card.pret);
    }
  });
});

showList.addEventListener("click", () =>{
  if(shoppingCart.length !== 0){
    shoppingList.style.visibility = "visible";
    createItems();
  }
})

closeShoppingList.addEventListener("click", ()=>{
    shoppingList.style.visibility = "hidden";
})