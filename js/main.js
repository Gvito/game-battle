// constructor warrior
function Guerrier(nom, attaque, defense, sante) {
  this.nom = nom,
  this.attaque = attaque,
  this.defense = defense,
  this.sante = sante,

  this.attack = function(test) {
    document.getElementById("attackWarrior").innerHTML = "Le guerrier " + this.nom + " a attaqué le guerrier " + test.nom + " de " + this.attaque;
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
    if (this.mana > 9) {
      document.getElementById("useHeal").innerHTML = "Le magicien utilise soin !"
      this.mana = this.mana - 10,
      this.sante = this.sante + 10
    }
    else {
      document.getElementById("errorHeal").innerHTML = "Le magicien n'a pu assez de mana, impossible de récuperer de la santé !";
    }
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
document.getElementById("viewNextGuerrier").innerHTML = "Nom: " + guerrier2.nom + "<br> Santé: " + guerrier2.sante;
// the warrior 2 attack warrior 1
guerrier2.attack(guerrier1);
document.getElementById("viewNextGuerrier2").innerHTML = "Nom: " + guerrier1.nom + "<br> Santé: " + guerrier1.sante;

///////////////////////////////////////////

// show the magicien stats
document.getElementById("viewMagicien").innerHTML = "Nom: " + magicien.nom + "<br> Attaque: " + magicien.attaque + "<br> Défense: " + magicien.defense + "<br> Santé: " + magicien.sante + "<br> Mana: " + magicien.mana;

// use healing
magicien.heal();
// show the magicien stats after heal
document.getElementById("viewMagicien2").innerHTML = "Nom: " + magicien.nom + "<br> Santé: " + magicien.sante + "<br> Mana: " + magicien.mana;


magicien.mana = 5;
// use healing
magicien.heal();
// show the magicien stats after heal (and with 5 mana)
document.getElementById("viewMagicien3").innerHTML = "Nom: " + magicien.nom + "<br> Santé: " + magicien.sante + "<br> Mana: " + magicien.mana;
