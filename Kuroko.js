"use strict";

// Variables représentant des personnages
const personnages = [
  { nom: "Kuroko Tetsuya", equipe: "Seirin High School" },
  { nom: "Kagami Taiga", equipe: "Seirin High School" },
  { nom: "Aomine Daiki", equipe: "Too Academy" },
  { nom: "Kise Ryota", equipe: "Kaijo High School" },
  { nom: "Midorima Shintaro", equipe: "Shutoku High School" }
];

// Classes représentant des joueurs et des équipes
class Joueur {
  constructor(nom, equipe) {
    this.nom = nom;
    this.equipe = equipe;
  }

  afficherInfo() {
    console.log(`${this.nom} de ${this.equipe}`);
    document.write(`<p>${this.nom} de ${this.equipe}</p>`);
  }
}

class Equipe {
  constructor(nom) {
    this.nom = nom;
    this.joueurs = [];
  }

  ajouterJoueur(joueur) {
    this.joueurs.push(joueur);
  }

  afficherEffectif() {
    console.log(`Effectif de l'équipe ${this.nom}:`);
    document.write(`<h2>Effectif de l'équipe ${this.nom}</h2>`);
    this.joueurs.forEach(joueur => {
      console.log(`- ${joueur.nom}`);
      document.write(`<p>${joueur.nom}</p>`);
    });
  }
}

// Fonctions représentant des actions liées à Kuroko's Basket
function marquerPanier(joueur) {
  console.log(`${joueur} marque un panier!`);
  document.write(`<p>${joueur} marque un panier!</p>`);
}

function afficherMessage(message) {
  console.log(message);
  document.write(`<p>${message}</p>`);
}

// Utilisation des classes et des fonctions
const joueurs = personnages.map(personnage => new Joueur(personnage.nom, personnage.equipe));

const equipeSeirin = new Equipe("Seirin High School");
joueurs.forEach(joueur => equipeSeirin.ajouterJoueur(joueur));

equipeSeirin.afficherEffectif();

marquerPanier("Kagami Taiga");

afficherMessage("Que le match commence!");

document.write("Seirin vient de marquer un panier!");