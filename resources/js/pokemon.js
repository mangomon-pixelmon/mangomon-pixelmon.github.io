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
	// new Pokemon("galaxy-bulbasaur", "Galaxy Bulbasaur", ["galaxy"], 1, ["Grass", "Poison"], [45, 49, 49, 65, 65, 45]),
	new Pokemon("malbluit-ariados", "Malbluit Ariados", ["malbluit"], 168, ["Ice", "Poison"], [70, 100, 70, 60, 70, 30]),
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
						<b>#${pokemon.dex} <big>${pokemon.name}</big> ${pokemon.type}</b>
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
