import React, { useState, useEffect } from 'react'
import { Poke, Loading, Error, Nothing } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllPoke, searchPoke, setActive } from '../actions/pokeAction'

const Container = () => {
  const pokemons = useSelector(state => state.pokemon.pokemons)
  const error = useSelector(state => state.pokemon.error)
  const loading = useSelector(state => state.pokemon.loading)
  const dispatch = useDispatch()
  const search = useSelector(state => state.pokemon.search)
  const [filtered, setFiltered] = useState()
  const [gen] = useState(Array.from({ length: 8 }))
  const isActive = useSelector(state => state.pokemon.isActive)

  const changeGen = (gen) => {
    switch (gen) {
      case 1:
        dispatch(setActive(1))
        dispatch(fetchAllPoke('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'))
        break;
      case 2:
        dispatch(setActive(2))
        dispatch(fetchAllPoke('https://pokeapi.co/api/v2/pokemon?limit=100&offset=151'))
        break;
      case 3:
        dispatch(setActive(3))
        dispatch(fetchAllPoke('https://pokeapi.co/api/v2/pokemon?limit=135&offset=251'))
        break;
      case 4:
        dispatch(setActive(4))
        dispatch(fetchAllPoke('https://pokeapi.co/api/v2/pokemon?limit=107&offset=386'))
        break;
      case 5:
        dispatch(setActive(5))
        dispatch(fetchAllPoke('https://pokeapi.co/api/v2/pokemon?limit=156&offset=493'))
        break;
      case 6:
        dispatch(setActive(6))
        dispatch(fetchAllPoke('https://pokeapi.co/api/v2/pokemon?limit=72&offset=649'))
        break;
      case 7:
        dispatch(setActive(7))
        dispatch(fetchAllPoke('https://pokeapi.co/api/v2/pokemon?limit=88&offset=721'))
        break;
      case 8:
        dispatch(setActive(8))
        dispatch(fetchAllPoke('https://pokeapi.co/api/v2/pokemon?limit=89&offset=809'))
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if (pokemons.length < 1) {
      dispatch(fetchAllPoke('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (pokemons.length > 0) {
      setFiltered(pokemons)
    }
    return () => {
      dispatch(searchPoke(''))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemons])

  useEffect(() => {
    if (filtered) {
      const timer = setTimeout(() => {
        const input = pokemons.filter(e => {
          return e.name.toLowerCase().includes(search.toLowerCase())
        })
        setFiltered(input)
      }, 1500);

      return () => clearTimeout(timer)
    } else {
      setFiltered(pokemons)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, filtered])

  if (error) {
    return <Error />
  }
  if (loading || !filtered) {
    return <Loading />
  }
  if (filtered.length === 0) {
    return <Nothing message="Not Found" />
  }
  return (
    <div className="sm:w-10/12 w-full p-2">
      <div className="flex justify-around sm:flex-nowrap flex-wrap my-2">
        {
          gen.map((e, idx) => {
            return <button
              disabled={isActive === (idx + 1) ? true : ''}
              className={`link px-3 py-2 my-1 border rounded-lg font-semibold hover:bg-gray-300 ${isActive === idx + 1 ? 'bg-gray-300' : ''}`}
              key={idx}
              onClick={() => changeGen(idx + 1)}>Gen {idx + 1}</button>
          })
        }
      </div>
      <div className="grid sm:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-2">
        {
          filtered.map((poke, idx) => {
            return (
              <Poke key={idx} poke={poke} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Container