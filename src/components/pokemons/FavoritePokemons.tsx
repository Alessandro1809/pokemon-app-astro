import type { FavoritePokemon } from "@/interfaces/favorite-pokemon";
import { For } from "solid-js";
import { createSignal } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";


const getLocaleStorage = (): FavoritePokemon[] => {
    const favoritePokemons = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    return favoritePokemons
}

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
export const FavoritePokemons = () => {
    
    const [pokemon, setPokemons] = createSignal(getLocaleStorage());

    return (
        <div class="grid grid-cols-3 sm:grid cols-4">
            <For each ={pokemon()}>
                {(pokemon) => <FavoritePokemonCard pokemon={pokemon}/>}
            </For>
        </div>
    )
}