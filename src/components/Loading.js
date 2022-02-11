import React from 'react'
import pokeball from '../assets/img/pokeball.png'

const Loading = () => {
  return (
    <div className={`rounded-md p-4 max-w-sm w-full mx-auto flex justify-center items-center`}>
      <img src={pokeball} alt="" className="w-5 h-5 animate-spin" />
    </div>
  )
}

export default Loading