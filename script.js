const filterButton = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const model = [
  {
    titlu: "Adidasi Nike Air Jordan",
    descriere: "Adidas 1",
    pret: 200,
    gen: "Male",
    size: 42,
  },
  {
    titlu: "Adidasi Adidas",
    descriere: "Adidas 2",
    pret: 300,
    gen: "Female",
    size: 45,
  },
  {
    titlu: "Adidasi Nike ",
    descriere: "Adidas 3",
    pret: 150,
    gen: "Male",
    size: 45,
  },
  {
    titlu: "Adidasi Abibas",
    descriere: "Adidas 4",
    pret: 50,
    gen: "Male",
    size: 44,
  },
  {
    titlu: "Adidasi da",
    descriere: "Adidas 5",
    pret: 120,
    gen: "Female",
    size: 38,
  },
  {
    titlu: "Adidasi nu",
    descriere: "Adidas 6",
    pret: 455,
    gen: "Female",
    size: 40,
  },
  {
    titlu: "Adidasi Puma",
    descriere: "Adidas 7",
    pret: 406,
    gen: "Male",
    size: 44,
  },
  {
    titlu: "Adidasi Spuma",
    descriere: "Adidas 8",
    pret: 105,
    gen: "Female",
    size: 44,
  },
  {
    titlu: "Adidasi Lotto",
    descriere: "Adidas 9",
    pret: 32,
    gen: "Male",
    size: 39,
  },
];

const cards = document.querySelector(".cards");

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
  </div>
</div>
  `;
};

model.forEach((card) => {
  createCard(card.titlu, card.descriere, card.pret);
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
    if (+inputs[0].value <= card.pret && card.pret <= +inputs[1].value){
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
    }
  });
});
