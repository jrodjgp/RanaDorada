export interface Beer {
  id: number;
  name: string;
  bg: string;
  style: string;
  abv: string;
  ibu: number | null;
  price: string;
  flavors: string;
  category: string;
}

const beers: Beer[] = [
  { id: 1, name: "Blanche",     bg: "#C49A00", style: "Witbier",             abv: "4.5%", ibu: 15,  price: "$2.20",  flavors: "cítrico · floral · suave",          category: "ales" },
  { id: 2, name: "Pale Ale",    bg: "#7A2200", style: "English Pale Ale",    abv: "5.0%", ibu: 35,  price: "$2.20",  flavors: "malta · frutal · equilibrado",       category: "ales" },
  { id: 3, name: "Porter",      bg: "#1A1008", style: "English-Style Porter", abv: "5.5%", ibu: 30,  price: "$2.20",  flavors: "chocolate · tostado · profundo",     category: "porters" },
  { id: 4, name: "IPA",         bg: "#1A3A0A", style: "American IPA",        abv: "6.5%", ibu: 60,  price: "$2.20",  flavors: "lúpulo · tropical · intenso",        category: "ales" },
  { id: 5, name: "Pils",        bg: "#B8860A", style: "Czech Pilsner",       abv: "4.8%", ibu: 25,  price: "$2.20",  flavors: "limpio · fresco · dorado",           category: "lagers" },
  { id: 6, name: "Grand Cru",   bg: "#2D1540", style: "Belgian Strong",      abv: "8.0%", ibu: 20,  price: "$2.20",  flavors: "compleja · elegante · especial",     category: "especiales" },
  { id: 7, name: "Coco Porter", bg: "#3D1800", style: "Porter con Coco",     abv: "5.5%", ibu: 28,  price: "$2.50",  flavors: "coco · chocolate · tropical",        category: "porters" },
  { id: 8, name: "6-Pack",      bg: "#1C1A17", style: "Mix Clásicas",        abv: "—",    ibu: null, price: "$13.20", flavors: "las 6 clásicas en un pack",          category: "6-pack" },
];

export default beers;
