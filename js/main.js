// constructor warrior
function Guerrier(nom, attaque, defense, sante) {
  this.nom = nom,
  this.attaque = attaque,
  this.defense = defense,
  this.sante = sante,

  this.attack = function(test) {
    test.sante = test.sante - this.attaque;
  }
};

// constructor magicien
function Magicien(nom, attaque, defense, sante, mana) {
  this.nom = nom,
  this.attaque = attaque,
  this.defense = defense,
  this.sante = sante,
  this.mana = mana,

  this.heal = function() {

  }
};

// create warrior 1
var guerrier1 = new Guerrier("Bernard", 15, 0, 30);
// create warrior 2
var guerrier2 = new Guerrier("Doudou", 5, 0, 60);
// create Magicien
var magicien = new Magicien("Dada", 5, 5, 40, 20);

// show the warrior stats
document.getElementById("viewGuerrier").innerHTML = "Nom: " + guerrier1.nom + "<br> Attaque: " + guerrier1.attaque + "<br> Défense: " + guerrier1.defense + "<br> Santé: " + guerrier1.sante;
document.getElementById("viewGuerrier2").innerHTML = "Nom: " + guerrier2.nom + "<br> Attaque: " + guerrier2.attaque + "<br> Défense: " + guerrier2.defense + "<br> Santé: " + guerrier2.sante;

// the warrior 1 attack warrior 2
guerrier1.attack(guerrier2);
// the warrior 2 attack warrior 1
guerrier2.attack(guerrier1);

// show the warrior stats after the battle
document.getElementById("viewNextGuerrier").innerHTML = "Nom: " + guerrier1.nom + "<br> Santé: " + guerrier1.sante;
document.getElementById("viewNextGuerrier2").innerHTML = "Nom: " + guerrier2.nom + "<br> Santé: " + guerrier2.sante;

// show the magicien stats
document.getElementById("viewMagicien").innerHTML = "Nom: " + magicien.nom + "<br> Attaque: " + magicien.attaque + "<br> Défense: " + magicien.defense + "<br> Santé: " + magicien.sante + "<br> Mana: " + magicien.mana;
