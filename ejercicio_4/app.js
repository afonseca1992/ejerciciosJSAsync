
const obtenerPokemon = require("./library");


// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon('charmander').then(pokemon => {
    console.log("Nombre:" + pokemon.name);
    console.log("Skills: ");
    pokemon.abilities.forEach(skill => {
        console.log(skill.ability.name);
    });

});
