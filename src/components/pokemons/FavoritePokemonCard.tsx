import type { FavoritePokemon } from "@/interfaces/favorite-pokemon"
import { createSignal, Show, type Component } from "solid-js"


interface Props {
    pokemon : FavoritePokemon
}


export const FavoritePokemonCard:Component<Props> = ({pokemon}) => {
    const [isVisible,setIsVisible]= createSignal(true);
    const imgsrc=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    const deletePokemon = () => {
        const favorite = JSON.parse(localStorage.getItem('favorites') ?? '[]') as FavoritePokemon[];
        const newFavorite = favorite.filter((fav) => fav.id !== pokemon.id);
        localStorage.setItem('favorites', JSON.stringify(newFavorite));
        setIsVisible(false);
    }


    return (
      <>
        <Show when={isVisible()}>
              <div class="flex flex-col justify-center items-center bg-gradient-to-t from-cyan-400 via-white/30 to-transparent p-4 rounded-md mx-32">
                    <a class="text-center capitalize" href={`/Pokemons/${pokemon.name}`}>
                    #{pokemon.id} {pokemon.name}
                    <img class="w-64 h-auto " 
                    src={imgsrc} 
                    alt={pokemon.name} 
                    style={`view-transition-name: ${pokemon.name}-image`}
                    />
                    </a>

                    <button
                    onClick={deletePokemon} 
                    class="font-bold tracking-wider bg-transparent rounded-md p-2 mx-4 hover:bg-orange-500/60 transition-all duration-200 border border-white">Borrar</button>
              </div>
        </Show>
      </>
    )
}