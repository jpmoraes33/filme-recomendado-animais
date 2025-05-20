let animais = [
  { nome: "Leão", idadeMinima: 0, categorias: ["selvagem", "mamífero"] },
  { nome: "Golfinho", idadeMinima: 0, categorias: ["aquático", "mamífero"] },
  { nome: "Águia", idadeMinima: 10, categorias: ["selvagem", "ave"] },
  { nome: "Cachorro", idadeMinima: 12, categorias: ["doméstico", "mamífero"] },
  { nome: "Gato", idadeMinima: 12, categorias: ["doméstico", "mamífero"] },
  { nome: "Panda", idadeMinima: 14, categorias: ["selvagem", "mamífero"] }
];

let idadeUsuario;
let gostaSelvagem, gostaAquatico, gostaDomestico;
let animaisRecomendados = [];

function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Animais", 20, 30);

  // Coletar idade
  idadeUsuario = int(prompt("Qual sua idade?"));

  // Coletar preferências
  gostaSelvagem = prompt("Você gosta de animais selvagens? (sim/não)").toLowerCase() === "sim";
  gostaAquatico = prompt("Você gosta de animais aquáticos? (sim/não)").toLowerCase() === "sim";
  gostaDomestico = prompt("Você gosta de animais domésticos? (sim/não)").toLowerCase() === "sim";

  for (let animal of animais) {
    if (idadeUsuario >= animal.idadeMinima) {
      if (
        (gostaSelvagem && animal.categorias.includes("selvagem")) ||
        (gostaAquatico && animal.categorias.includes("aquático")) ||
        (gostaDomestico && animal.categorias.includes("doméstico"))
      ) {
        animaisRecomendados.push(animal.nome);
      }
    }
  }

  if (animaisRecomendados.length > 0) {
    text("Animais recomendados para você:", 20, 70);
    for (let i = 0; i < animaisRecomendados.length; i++) {
      text("- " + animaisRecomendados[i], 40, 100 + i * 25);
    }
  } else {
    text("Nenhum animal disponível para sua idade e preferências.", 20, 70);
  }
}
