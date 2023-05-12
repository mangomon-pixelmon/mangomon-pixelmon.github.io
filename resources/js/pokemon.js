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
		return ("0000" + this.#dex).slice(-4)
	}
}

const DATA = [
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
	
	// Galaxy Malbluit
	// new Pokemon("galaxy-malbluit-trapinch", "Galaxy Malbluit Trapinch", ["galaxy", "malbluit"], 328, ["Ground", "Fairy"], [45, 100, 45, 45, 45, 10]),
	// new Pokemon("galaxy-malbluit-vibrava", "Galaxy Malbluit Vibrava", ["galaxy", "malbluit"], 329, ["Fairy", "Dragon"], [50, 100, 50, 20, 50, 70]),
	// new Pokemon("galaxy-malbluit-flygon", "Galaxy Malbluit Flygon", ["galaxy", "malbluit"], 330, ["Fairy", "Dragon"], [80, 130, 80, 50, 80, 100]),
	// new Pokemon("galaxy-malbluit-noibat", "Galaxy Malbluit Noibat", ["galaxy", "malbluit"], 714, ["Water", "Dragon"], [40, 20, 35, 55, 40, 55]),
	// new Pokemon("galaxy-malbluit-noivern", "Galaxy Malbluit Noivern", ["galaxy", "malbluit"], 715, ["Water", "Dragon"], [85, 60, 80, 107, 80, 123]),
];

window.addEventListener("DOMContentLoaded", event => {
	const pokedex = document.getElementById("pokedex");

	for (const pokemon of DATA) {
		pokedex.innerHTML += `
			<p><table class="pokemon" style="width:100%"><tbody>
				<tr>
					<td rowspan="2" style="width:200px">
						<img src="../resources/img/${pokemon.id}.png" height="200">
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
