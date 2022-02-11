const initState = {
  pokemons: [],
  pokemon: null,
  search: '',
  isActive: 1,
  loading: true,
  error: false
}

function pokemonReducer (state = initState, action) {
  switch (action.type) {
    case "SETALLPOKE":
      return {
        ...state,
        pokemons: action.payload
      }
    case "SETONEPOKE":
      return {
        ...state,
        pokemon: action.payload
      }
    case "SETLOADING":
      return {
        ...state,
        loading: action.payload
      }
    case "SETERROR":
      return {
        ...state,
        error: action.payload
      }
    case "SEARCHPOKE":
      return {
        ...state,
        search: action.payload
      }
    case "SETACTIVE":
    return {
      ...state,
      isActive: action.payload
    }
    default:
      return state
  }
}

export default pokemonReducer