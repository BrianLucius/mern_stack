const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
const example = pokémon.map((t,i) => `${i} : ${t.name}`);   //t = data, i=index from original array
console.log(example);

const bListPkmn = pokémon.filter(p => p.name[0] === "B");
console.log(bListPkmn);

const idList = pokémon.map(p => p.id);
console.log(idList);

const idThree = pokémon.filter(p => p.id%3 === 0);
console.log(idThree);

const fire = pokémon.filter(p => p.types.includes("fire"));
console.log(fire);

const multiType = pokémon.filter(p => p.types.length > 1);
console.log(multiType);

const pokeNames = pokémon.map(p => p.name);
console.log(pokeNames);

const namesId99 = pokémon.filter(p => p.id>99).map(p => p.name);
console.log(namesId99);

const pokePoison = pokémon.filter(p => p.types.includes("poison")).filter(p => p.types.length == 1).map(p => p.name);
console.log(pokePoison);

const pokeFly = pokémon.filter(p => p.types[1]==="flying").map(p => p.types[0]);
console.log(pokeFly);

const pokeNormalCount = pokémon.filter(p => p.types.includes("normal")).length;
console.log(pokeNormalCount);