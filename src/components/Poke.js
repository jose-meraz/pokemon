import React from 'react'
import { Type, Loading, Error, Image } from './index'
import { useFetch } from '../hooks'
import { Link } from 'react-router-dom'

const Poke = (props) => {
  const { data: pokemon, loading, error } = useFetch(props.poke.url)

  if (error) {
    return <Error />
  }
  if (loading) {
    return <Loading />
  }
  return (
    <div className="border-t-4 border-red-400 dark:border-blue-400 dark:hover:border-blue-200 hover:border-red-200 py-2 w-full flex items-start h-60 justify-center rounded shadow-md">
      <div className="w-9/12">
        <div className="flex align-middle md:flex-wrap justify-around">
          <div className="flex flex-col justify-center">
            <Link to={`/pokemon/${pokemon.id}`} className="capitalize font-semibold link">{pokemon.species.name}</Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <Image image={pokemon.sprites.front_default} name={pokemon.species.name} />
          {
            pokemon.types.map((type, idx) => {
              return <Type key={idx} type={type.type.name} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Poke