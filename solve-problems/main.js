// const title = document.querySelector("h1");

// const dinoCat = {
//   emoji: "🐱‍🐉",
//   dinheiro: 1400,
//   hobby: "assustar geral",
// };

// const ninjaCat = {
//   emoji: "🐱‍👤",
//   dinheiro: 500,
//   hobby: "Totalmente secreto",
// };

// const devCat = {
//   emoji: "🐱‍💻",
//   dinheiro: 1000,
//   hobby: "Aprender Javascript",
// };

// function mudarTitle() {
//   if (devCat.dinheiro > ninjaCat.dinheiro) {
//     title.innerHTML = `DevCat ${devCat.emoji} que é o rico porra. Olha o money do cara: R$${devCat.dinheiro}`;
//   } else if (ninjaCat.dinheiro > devCat.dinheiro) {
//     title.innerHTML = `NinjaCat ${ninjaCat.emoji} ta com uma grana guardada ta tirando`;
//   } else {
//     title.innerHTML = `Vão trabalhar porra`;
//   }
// }

// mudarTitle();

// Exercicio 2

const animeList = ["Dragon Ball", "Naruto", "Inuyasha", "Ben 10", "One Piece"];

const title = document.querySelector(".title");
const novoAnime = document.querySelector("#new-anime");
const btnAdd = document.querySelector(".add");
const btnRemove = document.querySelector(".remove");
console.log(animeList);

btnAdd.addEventListener("click", () => {
  const newAnime = novoAnime.value;
  animeList.push(newAnime);
  title.innerHTML = `<li class="list">${animeList}</li>`;
  console.log(animeList);
});

btnRemove.addEventListener("click", () => {
  animeList.pop([animeList].length - 1);
  title.innerHTML = animeList;
  console.log(animeList);
});
// title.innerHTML = animeList;
