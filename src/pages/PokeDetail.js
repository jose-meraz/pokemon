import React, { useState, useEffect } from 'react'
import { Data, Loading, Type, Error, Stat, Ability, Image } from '../components'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPoke } from '../actions/pokeAction'

function PokeDetail() {
  const { id } = useParams()
  const pokemon = useSelector(state => state.pokemon.pokemon)
  const error = useSelector(state => state.pokemon.error)
  const loading = useSelector(state => state.pokemon.loading)
  const dispatch = useDispatch()
  const [maxStat, setMaxStat] = useState(255)

  useEffect(() => {
    dispatch(fetchPoke(`https://pokeapi.co/api/v2/pokemon/${id}`))
    return () => dispatch(fetchPoke('clear'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (pokemon) {
      const max = pokemon.stats.reduce((a, b) => ({ base_stat: a.base_stat + b.base_stat }))
      setMaxStat(max.base_stat)
    }
  }, [pokemon])

  if (error) {
    return <Error />
  }
  if (loading || !pokemon) {
    return <Loading />
  }
  return (
    <div className="sm:w-10/12 w-full m-4 p-4">
      <div className="flex flex-wrap justify-center border-t-4 border-red-400 dark:border-blue-400 rounded-sm shadow-md p-2">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="font-semibold capitalize text-center">#{pokemon.id} {pokemon.species.name}</h1>
        </div>
        <div className="w-full sm:w-2/6 flex justify-around">
          <div className="flex justify-center flex-wrap">
            <Image image={pokemon.sprites.front_default} name={pokemon.species.name} />
            <p className="w-full text-center text-sm font-semibold">Normal</p>
          </div>
          <div className="flex justify-center flex-wrap">
            <Image image={pokemon.sprites.front_shiny} name={pokemon.species.name} />
            <p className="w-full text-center text-sm font-semibold">Shiny</p>
          </div>
        </div>
        <div className="w-full mt-2">
          <div className="grid md:grid-cols-4 grid-cols-none text-center py-2">
            <div className="flex flex-wrap justify-center border-t-2 py-2">
              <h1 className="font-semibold">Data</h1>
              <div className="w-full">
                <Data weight={pokemon.weight} />
                <Data height={pokemon.height} />
              </div>
            </div>
            <div className="border-t-2 py-2">
              <h1 className="font-semibold">Status</h1>
              {
                pokemon.stats.map((stat, idx) => <Stat key={idx} stat={stat} />)
              }
              <h1 className="font-semibold">Total Stat: {maxStat}</h1>
            </div>
            <div className="flex flex-wrap justify-center border-t-2 py-2">
              <h1 className="font-semibold">Ability</h1>
              <div className="w-full">
                {
                  pokemon.abilities.map((ability, idx) => <Ability key={idx} ability={ability} maxStat="max stat" />)
                }
              </div>
            </div>
            <div className=" flex justify-center flex-wrap border-t-2 py-2">
              <h1 className="w-full font-semibold">Type</h1>
              <div className="w-54">
                {
                  pokemon.types.map((type, idx) => <Type key={idx} type={type.type.name} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokeDetail