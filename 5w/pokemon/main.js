"use strict";
const pokemon_str = window.localStorage.getItem("pokemon");
if (!pokemon_str) {
    window.location.href = "./";
}
else {
    const pokemon = JSON.parse(pokemon_str);
    const main = document.querySelector("main");
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("img-wrapper");
    const img = document.createElement("img");
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    img.alt = pokemon.name;
    imgWrapper.appendChild(img);
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    Object.keys(pokemon).forEach((key) => {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerText = key;
        const tdValue = document.createElement("td");
        tdValue.innerText = pokemon[key];
        tr.append(td, tdValue);
        tbody.appendChild(tr);
    });
    if (main)
        main.append(imgWrapper, table);
}
