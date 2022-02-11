import React from 'react'

const Ability = (props) => {

  return (
    <p className="capitalize hover:bg-gray-300 dark:hover:text-black rounded-lg p-1">
      {props.ability.ability.name.replace('-', ' ')}
      {
        props.ability.is_hidden ? <span className="italic"> (Hidden Ability)</span> : ''
      }
    </p>
  )

}

export default Ability