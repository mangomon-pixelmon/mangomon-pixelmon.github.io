class Pokemon {
	#dex;
	#stats;

	constructor(id, name, forms, dex, types, stats) {
		this.id = id;
		this.name = name;
		this.forms = forms;
		this.#dex = dex;
		this.types = types
		this.#stats = stats
	}

	get type() {
		if (this.types.length == 0) return "???";
		return this.types.reduce((a, b) => a + "/" + b);
	}

	get hp() {
		return this.#stats[0];
	}

	get atk() {
		return this.#stats[1];
	}

	get def() {
		return this.#stats[2];
	}

	get spa() {
		return this.#stats[3];
	}

	get spd() {
		return this.#stats[4];
	}

	get spe() {
		return this.#stats[5];
	}

	get bst() {
		return this.#stats.reduce((a, b) => a + b, 0);
	}

	get dex() {
		return ("0000" + this.#dex).slice(-4);
	}

	get dexnum() {
		return this.#dex;
	}
}

let DATA = [
	// Ancient 
	new Pokemon("art-omanyte", "Ancient Arts Omanyte", ["art"], 138, ["Fire", "Water"], [35, 60, 70, 110, 55, 35]),
	new Pokemon("art-omastar", "Ancient Arts Omastar", ["art"], 139, ["Fire", "Water"], [70, 80, 95, 135, 70, 55]),
	new Pokemon("art-kabuto", "Ancient Arts Kabuto", ["art"], 140, ["Fire", "Dark"], [30, 100, 60, 55, 45, 75]),
	new Pokemon("art-kabutops", "Ancient Arts Kabutops", ["art"], 141, ["Fire", "Dark"], [60, 135, 105, 65, 70, 100]),
	new Pokemon("art-aerodactyl", "Ancient Arts Aerodactyl", ["art"], 142, ["Dragon", "Flying"], [80, 125, 85, 60, 45, 130]),
	new Pokemon("art-lileep", "Ancient Arts Lileep", ["art"], 345, ["Water", "Grass"], [66, 41, 77, 91, 87, 3]),
	new Pokemon("art-cradily", "Ancient Arts Cradily", ["art"], 346, ["Water", "Grass"], [86, 81, 97, 111, 107, 23]),
	new Pokemon("art-anorith", "Ancient Arts Anorith", ["art"], 347, ["Water", "Bug"], [45, 105, 35, 40, 35, 105]),
	new Pokemon("art-armaldo", "Ancient Arts Armaldo", ["art"], 348, ["Water", "Bug"], [75, 135, 85, 70, 65, 75]),
	new Pokemon("art-cranidos", "Ancient Arts Cranidos", ["art"], 408, ["Electric"], [67, 125, 30, 30, 10, 98]),
	new Pokemon("art-rampardos", "Ancient Arts Rampardos", ["art"], 409, ["Electric"], [97, 165, 60, 65, 20, 98]),
	new Pokemon("art-shieldon", "Ancient Arts Shieldon", ["art"], 410, ["Fairy", "Steel"], [50, 42, 118, 12, 108, 30]),
	new Pokemon("art-bastiodon", "Ancient Arts Bastiodon", ["art"], 411, ["Fairy", "Steel"], [80, 52, 168, 17, 158, 30]),
	new Pokemon("art-tirtouga", "Ancient Arts Tirtouga", ["art"], 564, ["Grass", "Poison"], [54, 98, 73, 53, 45, 42]),
	new Pokemon("art-carracosta", "Ancient Arts Carracosta", ["art"], 565, ["Grass", "Poison"], [74, 128, 103, 83, 65, 52]),
	new Pokemon("art-archen", "Ancient Arts Archen", ["art"], 566, ["Grass", "Flying"], [55, 132, 25, 74, 35, 90]),
	new Pokemon("art-archeops", "Ancient Arts Archeops", ["art"], 567, ["Grass", "Flying"], [75, 160, 45, 112, 55, 130]),
	new Pokemon("art-tyrunt", "Ancient Arts Tyrunt", ["art"], 696, ["Ice", "Dragon"], [58, 89, 77, 15, 85, 48]),
	new Pokemon("art-tyrantrum", "Ancient Arts Tyrantrum", ["art"], 697, ["Ice", "Dragon"], [82, 121, 119, 39, 99, 71]),
	new Pokemon("art-amaura", "Ancient Arts Amaura", ["art"], 698, ["Steel", "Ice"], [77, 29, 50, 67, 63, 86]),
	new Pokemon("art-aurorus", "Ancient Arts Aurorus", ["art"], 699, ["Steel", "Ice"], [123, 47, 72, 99, 92, 98]),
	
	// April Fools
	new Pokemon("aprilfools-pikachu", "Blu Pikachu", ["aprilfools"], 25, ["Electric", "Ice"], [35, 55, 40, 50, 50, 90]),
	new Pokemon("aprilfools-politoed", "Frog Politoed", ["aprilfools"], 186, ["Water"], [90, 75, 75, 90, 100, 70]),
	new Pokemon("aprilfools-bisharp", "Orbit Bisharp", ["aprilfools"], 625, ["Dark"], [65, 125, 100, 60, 70, 70]),
	new Pokemon("aprilfools-marshadow", "Alte Marshadow", ["aprilfools", "mythical"], 802, ["Fighting", "Ghost"], [90, 125, 80, 90, 90, 125]),
	new Pokemon("mango", "Mango", ["aprilfools", "legendary", "new"], 2001, ["Water", "Grass"], [75, 75, 75, 75, 75, 90]),

	// Blighted
	new Pokemon("blighted-oddish", "Blighted Crystal Oddish", ["blighted"], 43, ["Grass", "Poison"], [35, 50, 55, 75, 65, 40]),
	new Pokemon("blighted-gloom", "Blighted Crystal Gloom", ["blighted"], 44, ["Grass", "Poison"], [120, 65, 100, 85, 105, 110]),
	new Pokemon("blighted-vileplume", "Blighted Crystal Vileplume", ["blighted"], 45, ["Grass", "Poison"], [175, 80, 185, 110, 190, 100]),
	// blighted kabuto #140
	new Pokemon("blighted-kabutops", "Blighted Crystal Kabutops", ["blighted"], 141, ["Rock", "Ghost"], [120, 175, 145, 165, 70, 180]),
	new Pokemon("blighted-ledyba", "Blighted Crystal Ledyba", ["blighted"], 165, ["Dark", "Fighting"], [40, 120, 30, 40, 80, 105]),
	// new Pokemon("mega-blighted-ledyba", "Blighted Crystal Mega Ledyba", ["blighted", "mega"], 165, ["Bug", "Flying"], [70, 250, 88, 140, 70, 250]),
	new Pokemon("blighted-ledian", "Blighted Crystal Ledian", ["blighted"], 166, ["Fighting", "Dark"], [105, 135, 80, 55, 140, 125]),
	new Pokemon("blighted-bellossom", "Blighted Crystal Bellossom", ["blighted"], 182, ["Grass", "Ghost"], [175, 180, 95, 140, 100, 150]),
	new Pokemon("blighted-larvitar", "Blighted Crystal Larvitar", ["blighted"], 246, ["Rock", "Dark"], [50, 64, 100, 95, 100, 41]),
	new Pokemon("blighted-pupitar", "Blighted Crystal Pupitar", ["blighted"], 247, ["Rock", "Dark"], [150, 84, 130, 65, 130, 51]),
	new Pokemon("blighted-tyranitar", "Blighted Crystal Tyranitar", ["blighted"], 248, ["Rock", "Dark"], [200, 234, 140, 105, 100, 121]),
	new Pokemon("blighted-aron", "Blighted Crystal Aron", ["blighted"], 304, ["Steel", "Ghost"], [50, 70, 150, 40, 140, 30]),
	new Pokemon("blighted-lairon", "Blighted Crystal Lairon", ["blighted"], 305, ["Steel", "Ghost"], [110, 90, 140, 50, 150, 40]),
	new Pokemon("blighted-aggron", "Blighted Crystal Aggron", ["blighted"], 306, ["Steel", "Ghost"], [170, 160, 180, 160, 160, 50]),
	new Pokemon("blighted-gigalith", "Crystal Soul Gigalith", ["blighted", "crystal"], 526, ["Steel", "Fairy"], [125, 185, 190, 60, 80, 15]),
	new Pokemon("blighted-clauncher", "Blighted Crystal Clauncher", ["blighted"], 692, ["Water", "Dark"], [70, 53, 62, 138, 63, 94]),
	new Pokemon("blighted-clawitzer", "Blighted Crystal Clawitzer", ["blighted"], 693, ["Water", "Dark"], [171, 123, 138, 170, 139, 109]),
	
	// Christmas (TODO SORT AND INDEX)
	// new Pokemon("christmas-mega-rayquaza", "Christmas Mega Rayquaza", ["christmas", "mega", "legendary"], 0, ["Dragon", "Flying"], [105, 180, 100, 180, 100, 115]),
	// new Pokemon("christmas-rayquaza", "Christmas Rayquaza", ["christmas", "legendary"], 0, ["Dragon", "Flying"], [105, 150, 90, 150, 90, 95]),
	// new Pokemon("christmas-latias", "Christmas Latias", ["christmas", "legendary"], 0, ["Dragon", "Psychic"], [80, 80, 90, 110, 130, 110]),
	// new Pokemon("christmas-latios", "Christmas Latios", ["christmas", "legendary"], 0, ["Dragon", "Psychic"], [80, 90, 80, 130, 110, 110]),
	// new Pokemon("christmas-volcanion", "Christmas Volcanion", ["christmas", "mythical"], 0, ["Fire", "Water"], [80, 110, 120, 130, 90, 70]),
	// new Pokemon("christmas-marshadow", "Christmas Marshadow", ["christmas", "mythical"], 0, ["Fighting", "Ghost"], [90, 125, 80, 90, 90, 125]),
	// new Pokemon("christmas-mega-lopunny", "Christmas Mega Lopunny", ["christmas", "mega"], 0, ["Normal", "Fighting"], [65, 136, 94, 54, 96, 135]),
	// new Pokemon("christmas-regieleki", "Christmas Regieleki", ["christmas", "legendary"], 0, ["Electric"], [80, 100, 50, 100, 50, 200]),
	// new Pokemon("christmas-kartana", "Christmas Kartana", ["christmas"], 0, ["Grass", "Steel"], [59, 181, 131, 59, 31, 109]),
	// new Pokemon("christmas-snorlax", "Christmas Snorlax", ["christmas"], 0, ["Normal"], [160, 110, 65, 65, 110, 30]),
	// new Pokemon("christmas-gmax-snorlax", "Christmas Gigantamax Snorlax", ["christmas", "gmax"], 0, ["Normal"], [160, 110, 65, 65, 110, 30]),
	// new Pokemon("christmas-vanilluxe", "Christmas Vanilluxe", ["christmas"], 0, ["Ice"], [71, 95, 85, 110, 95, 79]),
	// new Pokemon("christmas-wyrdeer", "Christmas Wyrdeer", ["christmas"], 0, ["Normal", "Psychic"], [103, 105, 72, 105, 75, 65]),
	// new Pokemon("christmas-chandelure", "Christmas Chandelure", ["christmas"], 0, ["Ghost", "Fire"], [60, 55, 90, 145, 90, 80]),
	// new Pokemon("christmas-mrrime", "Christmas Mr. Rime", ["christmas"], 0, ["Ice", "Psychic"], [80, 85, 75, 110, 100, 70]),
	// new Pokemon("christmas-weavile", "Christmas Weavile", ["christmas"], 0, ["Dark", "Ice"], [70, 120, 65, 45, 85, 125]),
	// new Pokemon("christmas-hatterene", "Christmas Hatterene", ["christmas"], 0, ["Psychic", "Fairy"], [57, 90, 95, 136, 103, 29]),
	// new Pokemon("christmas-polteageist", "Christmas Polteageist", ["christmas"], 0, ["Ghost"], [60, 65, 65, 134, 114, 70]),
	// new Pokemon("christmas-alolan-ninetales", "Christmas Alolan Ninetales", ["christmas"], 0, ["Ice", "Fairy"], [73, 67, 75, 81, 100, 109]),
	// new Pokemon("christmas-crustle", "Christmas Crustle", ["christmas"], 0, ["Bug", "Rock"], [70, 105, 125, 65, 75, 45]),
	// new Pokemon("christmas-golurk", "Christmas Golurk", ["christmas"], 0, ["Ground", "Ghost"], [89, 124, 80, 55, 80, 55]),
	// new Pokemon("christmas-lopunny", "Christmas Lopunny", ["christmas"], 0, ["Normal"], [65, 76, 84, 54, 96, 105]),
	// new Pokemon("christmas-disguised-mimikyu", "Christmas Disguised Mimikyu", ["christmas"], 0, ["Ghost", "Fairy"], [55, 90, 80, 50, 105, 96]),
	// new Pokemon("christmas-busted-mimikyu", "Christmas Busted Mimikyu", ["christmas"], 0, ["Ghost", "Fairy"], [55, 90, 80, 50, 105, 96]),
	// new Pokemon("christmas-dodrio", "Christmas Dodrio", ["christmas"], 0, ["Normal", "Flying"], [60, 110, 70, 60, 60, 110]),
	// new Pokemon("christmas-stantler", "Christmas Stantler", ["christmas"], 0, ["Normal"], [73, 95, 62, 85, 65, 85]),
	// new Pokemon("christmas-chimecho", "Christmas Chimecho", ["christmas"], 0, ["Psychic"], [75, 50, 80, 95, 90, 65]),
	// new Pokemon("christmas-emolga", "Christmas Emolga", ["christmas"], 0, ["Electric", "Flying"], [55, 75, 60, 75, 60, 103]),
	// new Pokemon("christmas-furret", "Christmas Furret", ["christmas"], 0, ["Normal"], [85, 76, 64, 45, 55, 90]),
	// new Pokemon("christmas-plusle", "Christmas Plusle", ["christmas"], 0, ["Electric"], [60, 50, 40, 85, 75, 95]),
	// new Pokemon("christmas-minun", "Christmas Minun", ["christmas"], 0, ["Electric"], [60, 40, 50, 75, 85, 95]),
	// new Pokemon("christmas-vanillish", "Christmas Vanillish", ["christmas"], 0, ["Ice"], [51, 65, 65, 80, 75, 59]),
	// new Pokemon("christmas-munchlax", "Christmas Munchlax", ["christmas"], 0, ["Normal"], [135, 85, 40, 40, 85, 5]),
	// new Pokemon("christmas-lampent", "Christmas Lampent", ["christmas"], 0, ["Ghost", "Fire"], [60, 40, 60, 95, 60, 55]),
	// new Pokemon("christmas-hattrem", "Christmas Hattrem", ["christmas"], 0, ["Psychic"], [57, 40, 65, 86, 73, 49]),
	// new Pokemon("christmas-buneary", "Christmas Buneary", ["christmas"], 0, ["Normal"], [55, 66, 44, 44, 56, 85]),
	// new Pokemon("christmas-dwebble", "Christmas Dwebble", ["christmas"], 0, ["Bug", "Rock"], [50, 65, 85, 35, 35, 55]),
	// new Pokemon("christmas-sinistea", "Christmas Sinistea", ["christmas"], 0, ["Ghost"], [40, 45, 45, 74, 54, 50]),
	// new Pokemon("christmas-vanillite", "Christmas Vanillite", ["christmas"], 0, ["Ice"], [36, 50, 50, 65, 60, 44]),
	// new Pokemon("christmas-golett", "Christmas Golett", ["christmas"], 0, ["Ground", "Ghost"], [59, 74, 50, 35, 50, 35]),
	// new Pokemon("christmas-alolan-vulpix", "Christmas Alolan Vulpix", ["christmas"], 0, ["Ice"], [38, 41, 40, 50, 65, 65]),
	// new Pokemon("christmas-litwick", "Christmas Litwick", ["christmas"], 0, ["Ghost", "Fire"], [50, 30, 55, 65, 55, 20]),
	// new Pokemon("christmas-hatenna", "Christmas Hatenna", ["christmas"], 0, ["Psychic"], [42, 30, 45, 56, 53, 39]),
	// new Pokemon("christmas-bidoof", "Christmas Bidoof", ["christmas"], 0, ["Normal"], [59, 45, 40, 35, 40, 31]),
	// new Pokemon("christmas-sentret", "Christmas Sentret", ["christmas"], 0, ["Normal"], [35, 46, 34, 35, 45, 20]),
	// new Pokemon("christmas-doduo", "Christmas Doduo", ["christmas"], 0, ["Normal", "Flying"], [35, 85, 45, 35, 35, 75]),

	// Easter
	new Pokemon("easter-tentacool", "Easter Tentacool", ["easter"], 72, ["Water", "Poison"], [40, 40, 35, 50, 100, 70]),
	new Pokemon("easter-tentacruel", "Easter Tentacruel", ["easter"], 73, ["Water", "Poison"], [80, 70, 65, 80, 120, 100]),
	new Pokemon("easter-exeggcute", "Easter Exeggcute", ["easter"], 102, ["Grass"], [60, 40, 80, 60, 45, 40]),
	new Pokemon("easter-exeggutor", "Easter Exeggutor", ["easter"], 103, ["Grass"], [95, 95, 85, 125, 75, 55]),
	new Pokemon("easter-togepi", "Easter Togepi", ["easter"], 175, ["Fairy"], [35, 20, 65, 40, 65, 20]),
	new Pokemon("easter-togetic", "Easter Togetic", ["easter"], 176, ["Fairy", "Flying"], [55, 40, 85, 80, 105, 40]),
	new Pokemon("eastere-torchic", "Electric Easter Torchic", ["easter"], 255, ["Electric"], [45, 60, 40, 70, 50, 45]),
	new Pokemon("easterf-torchic", "Fairy Easter Torchic", ["easter"], 255, ["Fairy"], [45, 60, 40, 70, 50, 45]),
	new Pokemon("easteri-torchic", "Ice Easter Torchic", ["easter"], 255, ["Ice"], [45, 60, 40, 70, 50, 45]),
	new Pokemon("eastere-combusken", "Electric Easter Combusken", ["easter"], 256, ["Electric", "Fighting"], [60, 85, 60, 85, 60, 55]),
	new Pokemon("easterf-combusken", "Fairy Easter Combusken", ["easter"], 256, ["Fairy", "Fighting"], [60, 85, 60, 85, 60, 55]),
	new Pokemon("easteri-combusken", "Ice Easter Combusken", ["easter"], 256, ["Ice", "Fighting"], [60, 85, 60, 85, 60, 55]),
	new Pokemon("eastere-blaziken", "Electric Easter Blaziken", ["easter"], 257, ["Electric", "Fighting"], [80, 120, 70, 110, 70, 80]),
	new Pokemon("easterf-blaziken", "Fairy Easter Blaziken", ["easter"], 257, ["Fairy", "Fighting"], [80, 120, 70, 110, 70, 80]),
	new Pokemon("easteri-blaziken", "Ice Easter Blaziken", ["easter"], 257, ["Ice", "Fighting"], [80, 120, 70, 110, 70, 80]),
	new Pokemon("easter-torkoal", "Easter Torkoal", ["easter"], 324, ["Fire", "Grass"], [70, 85, 140, 85, 70, 20]),
	new Pokemon("easter-finneon", "Easter Finneon", ["easter"], 456, ["Water", "Grass"], [49, 49, 56, 49, 61, 66]),
	new Pokemon("easter-lumineon", "Easter Lumineon", ["easter"], 457, ["Water", "Grass"], [69, 69, 76, 69, 86, 91]),
	new Pokemon("easter-togekiss", "Easter Togekiss", ["easter"], 468, ["Fairy", "Flying"], [85, 50, 95, 120, 115, 80]),
	new Pokemon("easter-virizion", "Easter Virizion", ["easter", "legendary"], 640, ["Fairy", "Fighting"], [91, 90, 72, 90, 129, 108]),
	
	// Galaxy (TODO SORT AND INDEX)
	new Pokemon("galaxy-bulbasaur", "Galaxy Bulbasaur", ["galaxy"], 1, ["Grass", "Poison"], [45, 49, 49, 65, 65, 45]),
	new Pokemon("galaxy-ivysaur", "Galaxy Ivysaur", ["galaxy"], 2, ["Grass", "Poison"], [60, 62, 63, 80, 80, 60]),
	new Pokemon("galaxy-venusaur", "Galaxy Venusaur", ["galaxy"], 3, ["Grass", "Poison"], [80, 82, 83, 100, 100, 80]),
	new Pokemon("galaxy-mega-venusaur", "Galaxy Mega Venusaur", ["galaxy", "mega"], 3, ["Grass", "Poison"], [80, 100, 123, 122, 120, 80]),
	new Pokemon("galaxy-alolan-vulpix", "Alolan Galaxy Vulpix", ["galaxy"], 37, ["Ice"], [38, 41, 40, 50, 65, 65]),
	new Pokemon("galaxy-alolan-ninetales", "Alolan Galaxy Ninetales", ["galaxy"], 38, ["Ice", "Fairy"], [73, 67, 75, 81, 100, 109]),
	new Pokemon("galaxy-eevee", "Galaxy Eevee", ["galaxy"], 133, ["Normal"], [55, 55, 50, 45, 65, 55]),
	new Pokemon("galaxy-gmax-eevee", "Galaxy Gigantamax Eevee", ["galaxy", "gmax"], 133, ["Normal"], [55, 55, 50, 45, 65, 55]),
	new Pokemon("galaxy-vaporeon", "Galaxy Vaporeon", ["galaxy"], 134, ["Water"], [130, 65, 60, 110, 95, 65]),
	new Pokemon("galaxy-jolteon", "Galaxy Jolteon", ["galaxy"], 135, ["Electric"], [65, 65, 60, 110, 95, 130]),
	new Pokemon("galaxy-flareon", "Galaxy Flareon", ["galaxy"], 136, ["Fire"], [65, 130, 60, 95, 110, 65]),
	new Pokemon("galaxy-dratini", "Galaxy Dratini", ["galaxy"], 147, ["Dragon"], [41, 64, 45, 50, 50, 50]),
	new Pokemon("galaxy-dragonair", "Galaxy Dragonair", ["galaxy"], 148, ["Dragon"], [61, 84, 65, 70, 70, 70]),
	new Pokemon("galaxy-dragonite", "Galaxy Dragonite", ["galaxy"], 149, ["Dragon", "Flying"], [91, 134, 95, 100, 100, 80]),
	new Pokemon("galaxy-mew", "Galaxy Mew", ["galaxy", "mythical"], 151, ["Psychic"], [100, 100, 100, 100, 100, 100]),
	new Pokemon("galaxy-cyndaquil", "Galaxy Cyndaquil", ["galaxy"], 155, ["Fire"], [39, 52, 43, 60, 50, 65]),
	new Pokemon("galaxy-quilava", "Galaxy Quilava", ["galaxy"], 156, ["Fire"], [58, 64, 58, 80, 65, 80]),
	new Pokemon("galaxy-typhlosion", "Galaxy Typhlosion", ["galaxy"], 156, ["Fire"], [78, 84, 78, 109, 85, 100]),
	new Pokemon("galaxy-espeon", "Galaxy Espeon", ["galaxy"], 196, ["Psychic"], [65, 65, 60, 130, 95, 110]),
	new Pokemon("galaxy-umbreon", "Galaxy Umbreon", ["galaxy"], 197, ["Dark"], [95, 65, 110, 60, 130, 65]),
	new Pokemon("galaxy-shuckle", "Galaxy Shuckle", ["galaxy"], 213, ["Bug", "Rock"], [20, 10, 230, 10, 230, 5]),
	new Pokemon("galaxy-shroomish", "Galaxy Shroomish", ["galaxy"], 285, ["Grass"], [60, 40, 60, 40, 60, 35]),
	new Pokemon("galaxy-breloom", "Galaxy Breloom", ["galaxy"], 286, ["Grass", "Fighting"], [60, 130, 80, 60, 60, 70]),
	new Pokemon("galaxy-feebas", "Galaxy Feebas", ["galaxy"], 349, ["Water"], [20, 15, 20, 10, 55, 80]),
	new Pokemon("galaxy-milotic", "Galaxy Milotic", ["galaxy"], 350, ["Water"], [95, 60, 79, 100, 125, 81]),
	new Pokemon("galaxy-luvdisc", "Galaxy Luvdisc", ["galaxy"], 370, ["Water"], [43, 30, 55, 40, 65, 97]),
	new Pokemon("galaxy-rayquaza", "Galaxy Rayquaza", ["galaxy", "legendary"], 384, ["Dragon", "Flying"], [105, 150, 90, 150, 90, 95]),
	new Pokemon("galaxy-mega-rayquaza", "Galaxy Mega Rayquaza", ["galaxy", "mega", "legendary"], 384, ["Dragon", "Flying"], [105, 180, 100, 180, 100, 115]),
	new Pokemon("galaxy-buneary", "Galaxy Buneary", ["galaxy"], 427, ["Normal"], [55, 66, 44, 44, 56, 85]),
	new Pokemon("galaxy-lopunny", "Galaxy Lopunny", ["galaxy"], 428, ["Normal"], [65, 76, 84, 54, 96, 105]),
	new Pokemon("galaxy-mega-lopunny", "Galaxy Mega Lopunny", ["galaxy", "mega"], 428, ["Normal", "Fighting"], [65, 136, 94, 54, 96, 135]),
	new Pokemon("galaxy-spiritomb", "Galaxy Spiritomb", ["galaxy"], 442, ["Ghost", "Dark"], [50, 92, 108, 92, 108, 35]),
	new Pokemon("galaxy-riolu", "Galaxy Riolu", ["galaxy"], 447, ["Fighting"], [40, 70, 40, 35, 40, 60]),
	new Pokemon("galaxy-lucario", "Galaxy Lucario", ["galaxy"], 448, ["Fighting", "Steel"], [70, 110, 70, 115, 70, 90]),
	new Pokemon("galaxy-mega-lucario", "Galaxy Mega Lucario", ["galaxy", "mega"], 448, ["Fighting", "Steel"], [70, 145, 88, 140, 70, 112]),
	new Pokemon("galaxy-leafeon", "Galaxy Leafeon", ["galaxy"], 470, ["Grass"], [65, 110, 130, 60, 65, 95]),
	new Pokemon("galaxy-glaceon", "Galaxy Glaceon", ["galaxy"], 471, ["Ice"], [65, 60, 110, 130, 95, 65]),
	new Pokemon("galaxy-altered-giratina", "Galaxy Altered Giratina", ["galaxy", "legendary"], 487, ["Ghost", "Dragon"], [150, 100, 120, 100, 120, 90]),
	new Pokemon("galaxy-origin-giratina", "Galaxy Origin Giratina", ["galaxy", "legendary"], 487, ["Ghost", "Dragon"], [150, 120, 100, 120, 100, 90]),
	new Pokemon("galaxy-victini", "Galaxy Victini", ["galaxy", "mythical"], 494, ["Psychic", "Fire"], [100, 100, 100, 100, 100, 100]),
	new Pokemon("galaxy-audino", "Galaxy Audino", ["galaxy"], 531, ["Normal"], [103, 60, 86, 60, 86, 50]),
	new Pokemon("galaxy-zorua", "Galaxy Zorua", ["galaxy"], 570, ["Dark"], [40, 65, 40, 80, 40, 65]),
	new Pokemon("galaxy-zoroark", "Galaxy Zoroark", ["galaxy"], 571, ["Dark"], [60, 105, 60, 120, 60, 105]),
	new Pokemon("galaxy-solosis", "Galaxy Solosis", ["galaxy"], 577, ["Psychic"], [45, 30, 40, 105, 50, 20]),
	new Pokemon("galaxy-duosion", "Galaxy Duosion", ["galaxy"], 578, ["Psychic"], [65, 40, 50, 125, 60, 30]),
	new Pokemon("galaxy-reuniclus", "Galaxy Reuniclus", ["galaxy"], 579, ["Psychic"], [110, 65, 75, 125, 85, 30]),
	new Pokemon("galaxy-aurorus", "Galaxy Aurorus", ["galaxy"], 699, ["Rock", "Ice"], [123, 77, 72, 99, 92, 58]),
	new Pokemon("galaxy-sylveon", "Galaxy Sylveon", ["galaxy"], 700, ["Fairy"], [95, 65, 65, 110, 130, 60]),
	new Pokemon("galaxy-honedge", "Galaxy Honedge", ["galaxy"], 679, ["Steel", "Ghost"], [45, 80, 100, 35, 37, 28]),
	new Pokemon("galaxy-doublade", "Galaxy Doublade", ["galaxy"], 680, ["Steel", "Ghost"], [59, 110, 150, 45, 49, 35]),
	new Pokemon("galaxy-shield-aegislash", "Galaxy Shield Aegislash", ["galaxy"], 681, ["Steel", "Ghost"], [60, 50, 140, 50, 140, 60]),
	new Pokemon("galaxy-blade-aegislash", "Galaxy Blade Aegislash", ["galaxy"], 681, ["Steel", "Ghost"], [60, 140, 50, 140, 50, 60]),
	new Pokemon("galaxy-yveltal", "Galaxy Yveltal", ["galaxy", "legendary"], 717, ["Dark", "Flying"], [126, 131, 95, 131, 98, 99]),
	new Pokemon("galaxy-marshadow", "Galaxy Marshadow", ["galaxy", "mythical"], 802, ["Fighting", "Ghost"], [90, 125, 80, 90, 90, 125]),
	new Pokemon("galaxy-poipole", "Galaxy Poipole", ["galaxy"], 803, ["Poison"], [67, 73, 67, 73, 67, 73]),
	new Pokemon("galaxy-naganadel", "Galaxy Naganadel", ["galaxy"], 804, ["Poison", "Dragon"], [73, 73, 73, 127, 73, 121]),
	new Pokemon("galaxy-mango", "Galaxy Mango", ["galaxy", "legendary"], 2001, ["Water", "Grass"], [75, 75, 75, 75, 75, 90]),	

	// Galaxy Malbluit
	new Pokemon("galaxy-malbluit-trapinch", "Galaxy Malbluit Trapinch", ["galaxy", "malbluit"], 328, ["Ground", "Fairy"], [45, 100, 45, 45, 45, 10]),
	new Pokemon("galaxy-malbluit-vibrava", "Galaxy Malbluit Vibrava", ["galaxy", "malbluit"], 329, ["Fairy", "Dragon"], [50, 100, 50, 20, 50, 70]),
	new Pokemon("galaxy-malbluit-flygon", "Galaxy Malbluit Flygon", ["galaxy", "malbluit"], 330, ["Fairy", "Dragon"], [80, 130, 80, 50, 80, 100]),
	new Pokemon("galaxy-malbluit-noibat", "Galaxy Malbluit Noibat", ["galaxy", "malbluit"], 714, ["Water", "Dragon"], [40, 20, 35, 55, 40, 55]),
	new Pokemon("galaxy-malbluit-noivern", "Galaxy Malbluit Noivern", ["galaxy", "malbluit"], 715, ["Water", "Dragon"], [85, 60, 80, 107, 80, 123]),
	
	// Hermes
	new Pokemon("hermes-charmander", "Hermes Charmander", ["hermes"], 4, ["Fire", "Flying"], [39, 52, 33, 60, 40, 95]),
	new Pokemon("hermes-charmeleon", "Hermes Charmeleon", ["hermes"], 5, ["Fire", "Flying"], [58, 64, 48, 80, 55, 110]),
	new Pokemon("hermes-charizard", "Hermes Charizard", ["hermes"], 6, ["Fire", "Flying"], [78, 84, 58, 119, 65, 130]),
	new Pokemon("hermes-rattata", "Hermes Rattata", ["hermes"], 19, ["Normal"], [30, 56, 25, 25, 25, 102]),
	new Pokemon("hermes-raticate", "Hermes Raticate", ["hermes"], 20, ["Dark", "Electric"], [55, 101, 30, 50, 50, 127]),
	new Pokemon("hermes-ekans", "Hermes Ekans", ["hermes"], 23, ["Poison", "Flying"], [35, 60, 24, 40, 34, 85]),
	new Pokemon("hermes-arbok", "Hermes Arbok", ["hermes"], 24, ["Poison", "Flying"], [60, 115, 49, 65, 49, 130]),
	new Pokemon("hermes-celebi", "Hermes Celebi", ["hermes", "mythical"], 251, ["Electric", "Grass"], [80, 110, 80, 110, 80, 140]),
	new Pokemon("hermes-barboach", "Hermes Barboach", ["hermes"], 339, ["Electric", "Ground"], [50, 58, 23, 46, 31, 90]),
	new Pokemon("hermes-whiscash", "Hermes Whiscash", ["hermes"], 340, ["Electric", "Ground"], [90, 98, 43, 76, 51, 110]),
	new Pokemon("hermes-corphish", "Hermes Corphish", ["hermes"], 341, ["Water", "Electric"], [43, 90, 45, 50, 25, 75]),
	new Pokemon("hermes-crawdaunt", "Hermes Crawdaunt", ["hermes"], 342, ["Water", "Electric"], [53, 130, 75, 90, 25, 126]),
	new Pokemon("hermes-regidrago", "Hermes Regidrago", ["hermes", "legendary"], 895, ["Dragon", "Flying"], [150, 100, 50, 100, 50, 120]),
	
	// Malbluit
	new Pokemon("malbluit-spinarak", "Malbluit Spinarak", ["malbluit"], 167, ["Ice", "Poison"], [40, 60, 40, 40, 40, 30]),
	new Pokemon("malbluit-ariados", "Malbluit Ariados", ["malbluit"], 168, ["Ice", "Poison"], [70, 100, 70, 60, 70, 30]),
	new Pokemon("malbluit-numel", "Malbluit Numel", ["malbluit"], 322, ["Ice", "Ground"], [60, 60, 40, 65, 45, 35]),
	new Pokemon("malbluit-camerupt", "Malbluit Camerupt", ["malbluit"], 323, ["Ice", "Ground"], [90, 80, 70, 125, 75, 20]),
	new Pokemon("malbluit-mega-camerupt", "Malbluit Mega Camerupt", ["malbluit", "mega"], 323, ["Fire", "Ground"], [70, 120, 100, 145, 105, 20]),
	new Pokemon("malbluit-trapinch", "Malbluit Trapinch", ["malbluit"], 328, ["Ground", "Fairy"], [45, 100, 45, 45, 45, 10]),
	new Pokemon("malbluit-vibrava", "Malbluit Vibrava", ["malbluit"], 329, ["Fairy", "Dragon"], [50, 100, 50, 20, 50, 70]),
	new Pokemon("malbluit-flygon", "Malbluit Flygon", ["malbluit"], 330, ["Fairy", "Dragon"], [80, 130, 80, 50, 80, 100]),
	new Pokemon("malbluit-gible", "Malbluit Gible", ["malbluit"], 443, ["Dragon", "Water"], [58, 70, 45, 40, 45, 42]),
	new Pokemon("malbluit-gabite", "Malbluit Gabite", ["malbluit"], 444, ["Dragon", "Water"], [68, 90, 65, 50, 55, 82]),
	new Pokemon("malbluit-garchomp", "Malbluit Garchomp", ["malbluit"], 445, ["Dragon", "Water"], [110, 135, 95, 85, 85, 100]),
	new Pokemon("malbluit-klefki", "Malbluit Klefki", ["malbluit"], 707, ["Ghost", "Fairy"], [57, 60, 91, 80, 87, 95]),
	new Pokemon("malbluit-noibat", "Malbluit Noibat", ["malbluit"], 714, ["Water", "Dragon"], [40, 20, 35, 55, 40, 55]),
	new Pokemon("malbluit-noivern", "Malbluit Noivern", ["malbluit"], 715, ["Water", "Dragon"], [85, 60, 80, 107, 80, 123]),
	
	// MVP
	// new Pokemon("art-mvp-aerodactyl", "Ancient Arts MVP Aerodactyl", ["art", "mvp"], 142, ["Dragon", "Flying"], [80, 125, 85, 60, 45, 130]),
	// new Pokemon("royal-mvp-butterfree", "Royal Hive MVP Butterfree", ["royal", "mvp"], 12, ["Bug", "Flying"], [60, 45, 70, 90, 80, 60]),
	// new Pokemon("royal-mvp-gmax-butterfree", "Royal Hive MVP Gigantamax Butterfree", ["royal", "mvp", "gmax"], 12, ["Bug", "Flying"], [60, 45, 50, 90, 80, 70]),

	// new Pokemon("mvp-salamence", "MVP Salamence", ["mvp"], 0, ["Dragon", "Flying"], [95, 135, 80, 110, 80, 100]),
	// new Pokemon("mvp-mega-slowbro", "MVP Mega Slowbro", ["mvp", "mega"], 0, ["Water", "Psychic"], [95, 75, 180, 130, 80, 30]),
	// new Pokemon("mvp-buzzwole", "MVP Buzzwole", ["mvp"], 0, ["Bug", "Fighting"], [107, 139, 139, 53, 53, 79]),
	// new Pokemon("mvp-magnezone", "MVP Magnezone", ["mvp"], 0, ["Electric", "Steel"], [70, 70, 115, 130, 90, 60]),
	// new Pokemon("mvp-conkeldurr", "MVP Conkeldurr", ["mvp"], 0, ["Fighting"], [105, 140, 95, 55, 65, 45]),
	// new Pokemon("mvp-aegislash", "MVP Aegislash", ["mvp"], 0, ["Steel", "Ghost"], [60, 50, 140, 50, 140, 60]),
	// new Pokemon("mvp-blade-aegislash", "MVP Blade Aegislash", ["mvp"], 0, ["Steel", "Ghost"], [60, 140, 50, 140, 50, 60]),
	// new Pokemon("mvp-slowbro", "MVP Slowbro", ["mvp"], 0, ["Water", "Psychic"], [95, 75, 110, 100, 80, 30]),
	// new Pokemon("mvp-clefable", "MVP Clefable", ["mvp"], 0, ["Fairy"], [95, 70, 73, 95, 90, 60]),
	// new Pokemon("mvp-crabominable", "MVP Crabominable", ["mvp"], 0, ["Fighting", "Ice"], [97, 132, 77, 62, 67, 43]),
	// new Pokemon("mvp-torkoal", "MVP Torkoal", ["mvp"], 0, ["Fire"], [70, 85, 140, 85, 70, 20]),
	// new Pokemon("mvp-furret", "MVP Furret", ["mvp"], 0, ["Normal"], [85, 76, 64, 45, 55, 90]),
	// new Pokemon("mvp-crabrawler", "MVP Crabrawler", ["mvp"], 0, ["Fighting"], [47, 82, 57, 42, 47, 63]),
	// new Pokemon("mvp-clefairy", "MVP Clefairy", ["mvp"], 0, ["Fairy"], [70, 45, 48, 60, 65, 35]),
	// new Pokemon("mvp-sentret", "MVP Sentret", ["mvp"], 0, ["Normal"], [35, 46, 34, 35, 45, 20]),
	// new Pokemon("galaxy-mvp-marshadow", "Galaxy MVP Marshadow", ["galaxy", "mvp", "mythical"], 0, ["Fighting", "Ghost"], [90, 125, 80, 90, 90, 125]),

	// Royal Hive
	new Pokemon("royal-caterpie", "Royal Hive Caterpie", ["royal"], 10, ["Bug"], [45, 30, 55, 20, 20, 35]),
	new Pokemon("royal-metapod", "Royal Hive Metapod", ["royal"], 11, ["Bug"], [50, 20, 75, 25, 25, 20]),
	new Pokemon("royal-butterfree", "Royal Hive Butterfree", ["royal"], 12, ["Bug", "Flying"], [60, 45, 70, 90, 80, 60]),
	new Pokemon("royal-gmax-butterfree", "Royal Hive Gigantamax Butterfree", ["royal", "gmax"], 12, ["Bug", "Flying"], [60, 45, 50, 90, 80, 70]),
	new Pokemon("royal-weedle", "Royal Hive Weedle", ["royal"], 13, ["Bug", "Poison"], [40, 35, 50, 20, 20, 40]),
	new Pokemon("royal-kakuna", "Royal Hive Kakuna", ["royal"], 14, ["Bug", "Poison"], [45, 25, 70, 25, 25, 25]),
	new Pokemon("royal-beedrill", "Royal Hive Beedrill", ["royal"], 15, ["Bug", "Poison"], [65, 90, 60, 45, 80, 65]),
	new Pokemon("royal-mega-beedrill", "Royal Hive Mega Beedrill", ["royal", "mega"], 15, ["Bug", "Poison"], [65, 150, 60, 15, 80, 135]),
	new Pokemon("royal-scyther", "Royal Hive Scyther", ["royal"], 123, ["Bug", "Flying"], [70, 110, 100, 55, 80, 95]),
	new Pokemon("royal-spinarak", "Royal Hive Spinarak", ["royal"], 167, ["Bug", "Poison"], [40, 60, 60, 40, 40, 20]),
	new Pokemon("royal-ariados", "Royal Hive Ariados", ["royal"], 168, ["Bug", "Poison"], [70, 90, 90, 60, 70, 30]),
	new Pokemon("royal-yanma", "Royal Hive Yanma", ["royal"], 193, ["Bug", "Flying"], [65, 65, 65, 75, 45, 85]),
	new Pokemon("royal-pineco", "Royal Hive Pineco", ["royal"], 204, ["Bug"], [50, 65, 110, 35, 35, 5]),
	new Pokemon("royal-forretress", "Royal Hive Forretress", ["royal"], 205, ["Bug", "Steel"], [75, 90, 160, 60, 60, 30]),
	new Pokemon("royal-scizor", "Royal Hive Scizor", ["royal"], 212, ["Bug", "Steel"], [70, 130, 120, 55, 80, 55]),
	new Pokemon("royal-mega-scizor", "Royal Hive Mega Scizor", ["royal", "mega"], 212, ["Bug", "Steel"], [70, 150, 160, 65, 100, 65]),
	new Pokemon("royal-combee", "Royal Hive Combee", ["royal"], 415, ["Bug", "Flying"], [30, 30, 62, 30, 42, 60]),
	new Pokemon("royal-vespiquen", "Royal Hive Vespiquen", ["royal"], 416, ["Bug", "Flying"], [60, 90, 62, 90, 62, 110]),
	new Pokemon("royal-yanmega", "Royal Hive Yanmega", ["royal"], 469, ["Bug", "Flying"], [86, 76, 106, 116, 56, 85]),
	new Pokemon("royal-escavalier", "Royal Hive Escavalier", ["royal"], 589, ["Bug", "Steel"], [70, 135, 125, 60, 105, 10]),
	new Pokemon("royal-accelgor", "Royal Hive Accelgor", ["royal"], 617, ["Bug"], [80, 70, 60, 100, 60, 135]),
	new Pokemon("royal-genesect", "Royal Hive Genesect", ["royal"], 649, ["Bug", "Steel"], [71, 120, 115, 120, 95, 89]),
	new Pokemon("royal-grubbin", "Royal Hive Grubbin", ["royal"], 736, ["Bug"], [47, 62, 65, 55, 45, 36]),
	new Pokemon("royal-charjabug", "Royal Hive Charjabug", ["royal"], 737, ["Bug", "Electric"], [57, 82, 115, 55, 75, 26]),
	new Pokemon("royal-vikavolt", "Royal Hive Vikavolt", ["royal"], 738, ["Bug", "Electric"], [77, 70, 110, 145, 75, 33]),
	new Pokemon("royal-wimpod", "Royal Hive Wimpod", ["royal"], 767, ["Bug", "Water"], [25, 35, 60, 20, 30, 70]),
	new Pokemon("royal-golisopod", "Royal Hive Golisopod", ["royal"], 768, ["Bug", "Water"], [75, 125, 160, 60, 90, 30]),
	new Pokemon("royal-blipbug", "Royal Hive Blipbug", ["royal"], 825, ["Bug"], [25, 20, 40, 25, 45, 35]),
	new Pokemon("royal-dottler", "Royal Hive Dottler", ["royal"], 825, ["Bug", "Psychic"], [50, 35, 100, 50, 90, 20]),
	new Pokemon("royal-orbeetle", "Royal Hive Orbeetle", ["royal"], 826, ["Bug", "Psychic"], [60, 45, 130, 80, 120, 80]),
	new Pokemon("royal-gmax-orbeetle", "Royal Hive Gigantamax Orbeetle", ["royal", "gmax"], 826, ["Bug", "Psychic"], [60, 45, 110, 80, 120, 90]),
	new Pokemon("royal-kleavor", "Royal Hive Kleavor", ["royal"], 900, ["Bug", "Rock"], [70, 135, 115, 45, 70, 75]),

	// Misc (TODO Sort and Index)
	new Pokemon("bday-pikachu", "Birthday Pikachu", ["birthday"], 25, ["Electric"], [35, 55, 40, 50, 50, 90]),
	new Pokemon("spooky-pikachu", "Spooky Pikachu", ["misc"], 25, ["Electric"], [35, 55, 40, 50, 50, 90]),
	new Pokemon("army-torchic", "Army Torchic", ["misc"], 255, ["Grass", "Dark"], [85, 100, 80, 70, 50, 100]),
	new Pokemon("beepbeep-wurmple", "Beep Beep Wurmple", ["misc"], 265, ["Bug", "Steel"], [100, 115, 105, 10, 30, 170]),
	new Pokemon("bday-gliscor", "Birthday Gliscor", ["birthday"], 472, ["Ground", "Flying"], [75, 95, 125, 45, 75, 95]),
	new Pokemon("spooky-marshadow", "Spooky Marshadow", ["misc", "mythical"], 802, ["Fighting", "Ghost"], [90, 125, 80, 90, 90, 125]),
	new Pokemon("sans-marshadow", "Sans Marshadow", ["misc", "mythical"], 802, ["Fighting", "Ghost"], [90, 125, 80, 90, 90, 125]),
	new Pokemon("ascendant-marshadow", "Ascendant Marshadow", ["misc", "mythical"], 802, ["Fighting", "Ghost"], [90, 125, 80, 90, 90, 125]),
	new Pokemon("crystal-applin", "Crystal Applin", ["crystal"], 840, ["Grass", "Dragon"], [40, 40, 90, 40, 50, 10]),
	new Pokemon("crystal-flapple", "Crystal Flapple", ["crystal"], 841, ["Grass", "Dragon"], [70, 110, 100, 95, 80, 50]),
	new Pokemon("crystal-gmax-flapple", "Crystal Gigantamax Flapple", ["crystal", "gmax"], 841, ["Grass", "Dragon"], [70, 110, 80, 95, 60, 70]),
	new Pokemon("crystal-appletun", "Crystal Appletun", ["crystal"], 842, ["Grass", "Dragon"], [110, 85, 100, 100, 100, 10]),
	new Pokemon("crystal-gmax-appletun", "Crystal Gigantamax Appletun", ["crystal", "gmax"], 842, ["Grass", "Dragon"], [110, 85, 80, 100, 80, 30]),
];

DATA.sort((a, b) => {
	if (a.dexnum < b.dexnum) return -1;
	if (a.dexnum > b.dexnum) return 1;
	return a.name.localeCompare(b.name);
});

window.addEventListener("DOMContentLoaded", event => {
	const pokedex = document.getElementById("pokedex");

	for (const pokemon of DATA) {
		pokedex.innerHTML += `
			<p><table class="pokemon" style="width:100%"><tbody>
				<tr>
					<td rowspan="2" style="width:200px">
						<img src="/resources/img/${pokemon.id}.png" onerror="this.onerror = null; this.src = '/resources/img/missingno.png';">
					</td>
					<td>
						<b>#${pokemon.dex} <big><b>${pokemon.name}</b></big> ${pokemon.type}</b>
					</td>
				</tr>
				<tr>
					<td><table><tbody>
						<tr>
							<th style="width:100px"><div style="float:left">HP:</div><div style="float:right">${pokemon.hp}</div></th>
							<td style="width:255px"><div class="hp stat" style="height:20px; width:calc(100% * ${pokemon.hp}/255)"></div></td>
						</tr>
						<tr>
							<th style="width:100px"><div style="float:left">Attack:</div><div style="float:right">${pokemon.atk}</div></th>
							<td style="width:255px"><div class="atk stat" style="height:20px; width:calc(100% * ${pokemon.atk}/255)"></div></td>
						</tr>
						<tr>
							<th style="width:100px"><div style="float:left">Defense:</div><div style="float:right">${pokemon.def}</div></th>
							<td style="width:255px"><div class="def stat" style="height:20px; width:calc(100% * ${pokemon.def}/255)"></div></td>
						</tr>
						<tr>
							<th style="width:100px"><div style="float:left">Sp. Atk:</div><div style="float:right">${pokemon.spa}</div></th>
							<td style="width:255px"><div class="spa stat" style="height:20px; width:calc(100% * ${pokemon.spa}/255)"></div></td>
						</tr>
						<tr>
							<th style="width:100px"><div style="float:left">Sp. Def:</div><div style="float:right">${pokemon.spd}</div></th>
							<td style="width:255px"><div class="spd stat" style="height:20px; width:calc(100% * ${pokemon.spd}/255)"></div></td>
						</tr>
						<tr>
							<th style="width:100px"><div style="float:left">Speed:</div><div style="float:right">${pokemon.spe}</div></th>
							<td style="width:255px"><div class="spe stat" style="height:20px; width:calc(100% * ${pokemon.spe}/255)"></div></td>
						</tr>
						<tr>
							<th style="width:100px"><div style="float:left">Total:</div><div style="float:right">${pokemon.bst}</div></th>
							<td></td>
						</tr>
					</tbody></table></td>
				</tr>
			</tbody></table></p>
		`;
	}
});
