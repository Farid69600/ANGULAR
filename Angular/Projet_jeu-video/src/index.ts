type jeu = {
  nom: string;
  genre: string;
  editeur: string;
  pegi: number;
  anneeSortie: number;
  multijoueur: boolean;
  enLigne: boolean;
  image: URL;
};

let tabJeux: jeu[] = [
  {
    nom: "Assassin's Creed",
    genre: "Aventure",
    editeur: "Ubisoft",
    pegi: 18,
    anneeSortie: 2007,
    multijoueur: true,
    enLigne: true,
    image: new URL(
      "https://images-na.ssl-images-amazon.com/images/I/513gesNIxRL._SX307_BO1,204,203,200_.jpg"
    ),
  },
  {
    nom: "Tomb Raider",
    genre: "Aventure",
    editeur: "Eidos Interactive",
    pegi: 18,
    anneeSortie: 2015,
    multijoueur: true,
    enLigne: true,
    image: new URL(
      "https://m.media-amazon.com/images/I/610CYEwFtTS._AC_SL1000_.jpg"
    ),
  },
  {
    nom: "Super Mario",
    genre: "Aventure",
    editeur: "Interactive",
    pegi: 18,
    anneeSortie: 2017,
    multijoueur: true,
    enLigne: true,
    image: new URL(
      "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_SuperMario3DWorldAndBowsersFury_image800w.jpg"
    ),
  },
  {
    nom: "Age of Empires",
    genre: "Aventure",
    editeur: "Microsoft",
    pegi: 18,
    anneeSortie: 2020,
    multijoueur: true,
    enLigne: true,
    image: new URL(
      "https://s3.gaming-cdn.com/images/products/4820/271x377/age-of-empires-ii-definitive-edition-steam-edition-pc-jeu-steam-cover.jpg"
    ),
  },
];
console.log("test");
