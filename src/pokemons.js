
// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
    return pokemons.filter(pokemon => pokemon.type.includes("Fire"));
}
const firePokemons = getAllFirePokemons(pokemons);
console.log(firePokemons);
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
    if (pokemons.length === 0) return 0;
    
    let shortest = pokemons[0];

    pokemons.forEach(pokemon => {
        const height = parseFloat(pokemon.height);
        if (height < parseFloat(shortest.height)) {
            shortest = pokemon;
        }
    });

    return shortest.name;
}

const shortestPokemonName = shortestPokemon(pokemons);
console.log(shortestPokemonName); 
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
    if (pokemons.length === 0) return 0;

     const validPokemons = pokemons.filter(pokemon => pokemon.candy_count != null);
     const totalCandyCount = validPokemons.reduce((sum, pokemon) => sum + pokemon.candy_count, 0);
     const count = validPokemons.length;
     const average = count > 0 ? totalCandyCount / count : 0;
     return parseFloat(average.toFixed(2));
}

const averageCandy = candyAverage(pokemons);
console.log(averageCandy); 
// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
    if (pokemons.length === 0) return 0;
    
    if (!Array.isArray(pokemons)) {
        throw new Error("Input must be an array");
    }
    const groundPokemons = pokemons
        .filter(pokemon => pokemon.type.includes("Ground"))
        .map(pokemon => pokemon.img);
    return groundPokemons.slice(0, 10);
}
const groundPokemonImgs = getGroundPokeImg(pokemons);
console.log(groundPokemonImgs);

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
    if (pokemons.length === 0) return 0;
    
    if (!Array.isArray(pokemons)) {
        throw new Error("Input must be an array");
    }
    const pikachu = pokemons.find(pokemon => pokemon.name === "Pikachu");
    if (!pikachu) {
        throw new Error("Pikachu not found in the array");
    }
    const pikachuWeight = parseFloat(pikachu.weight.split(" ")[0]);

    return pokemons
        .filter(pokemon => {
            const weight = parseFloat(pokemon.weight.split(" ")[0]);
            return weight > pikachuWeight;
        })
        .map(pokemon => pokemon.name);
}
const heavyPokemons = getHeavyPokemons(pokemons);
console.log(heavyPokemons); 

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
    if (!Array.isArray(pokemons)) {
        throw new Error("Input must be an array");
    }

    const sortedPokemons = pokemons
        .slice() 
        .sort((a, b) => a.name.localeCompare(b.name));
    const names = sortedPokemons
        .slice(0, 20) 
        .map(pokemon => pokemon.name);

    return names;
}
const alphabeticallyOrderedNames = orderAlphabetically(pokemons);
console.log(alphabeticallyOrderedNames);

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(pokemons) {
    if (!Array.isArray(pokemons)) {
        throw new Error("Input must be an array");
    }

    const singleWeaknessPokemons = pokemons
        .filter(pokemon => pokemon.weaknesses && pokemon.weaknesses.length === 1)
        .slice(0, 15) 
        .map(pokemon => pokemon.name);

    return singleWeaknessPokemons;
}
const strongPokemonsList = strongPokemons(pokemons);
console.log(strongPokemonsList); 
