export function getPockemonsList(params) {
    return {
        type: 'POKEMONS_LIST_REQUEST',
        payload: {
            options: {
                returnRejectedPromiseOnError: true
            },
            request: {
                params: params,
                method: 'get',
                url: 'pokemon'
            }
        }
    }
}

export function getPokemon(id) {
    return {
        type: 'POKEMON_REQUEST',
        payload: {
            options:{
                returnRejectedPromiseOnError: true
            },
            request: {
                method: 'get',
                url: `pokemon/${id}`
            }
        }
    }
}