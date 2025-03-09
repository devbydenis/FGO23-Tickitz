async function getPokemonList() {
  // const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  try {
    // Fetch the list of pokemons
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();

    // Fetch details for each pokemon
    const pokemons = await Promise.all(
      data.results.map(async (pokemon) => {
        const result = {
          name: pokemon.name,
        };

        const pokemonResponse = await fetch(pokemon.url);
        if (!pokemonResponse.ok) throw new Error(pokemonResponse.statusText);
        const pokemonData = await pokemonResponse.json();

        Object.assign(result, {
          img: pokemonData.sprites.front_default,
          types: pokemonData.types.map((type) => type.type),
        });

        return result;
      })
    );

    // Fetch type details for each pokemon
    const pokemonsWithTypes = await Promise.all(
      pokemons.map(async (pokemon) => {
        const typeUrl = [];
        const result = {
          name: pokemon.name,
          img: pokemon.img,
          types: typeUrl,
        };

        await Promise.all(
          pokemon.types.map(async (type) => {
            const typeResponse = await fetch(type.url);
            if (!typeResponse.ok) throw new Error(typeResponse.statusText);
            const typeData = await typeResponse.json();

            typeUrl.push({
              name: typeData.name,
              url: typeData.sprites["generation-viii"]["sword-shield"].name_icon,
            });
          })
        );

        return result;
      })
    );

    // Render pokemons to the DOM
    pokemonsWithTypes.forEach((pokemon) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const pokemonImg = document.createElement("img");
      pokemonImg.src = pokemon.img;
      pokemonImg.alt = pokemon.name;
      pokemonImg.width = 96;
      pokemonImg.height = 96;

      const pokemonTypes = document.createElement("div");
      pokemon.types.forEach((type) => {
        const img = document.createElement("img");
        img.src = type.url;
        img.alt = type.name;
        img.width = 200;
        img.height = 44;
        pokemonTypes.append(img);
      });

      const pokemonName = document.createElement("p");
      pokemonName.textContent = pokemon.name;

      card.append(pokemonImg, pokemonTypes, pokemonName);
      loadingElement.dispatchEvent(new Event("hide"));
      document.querySelector(".list").style.display = "grid";
      document.querySelector(".list").append(card);
    });
  } catch (err) {
    if (err instanceof Error) console.error(err.message);
  }
}