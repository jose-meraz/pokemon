import React from 'react'

const Data = (props) => {
  if (props.weight) {
    return (
      <p className="hover:bg-gray-300 dark:hover:text-black rounded-full"><span className="font-semibold">Weight</span> {props.weight / 10} kg</p>
    )
  } else if (props.height) {
    return (
      <p className="hover:bg-gray-300 dark:hover:text-black rounded-full"><span className="font-semibold">Height</span> {props.height * 10} cm</p>
    )
  }
}

export default Data