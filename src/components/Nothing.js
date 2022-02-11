import React from 'react'

const Nothing = (props) => {
  return (
    <div className={`rounded-md p-4 max-w-sm w-full mx-auto flex justify-center items-center`}>
      <p className="text-2xl font-semibold">{props.message}</p>
    </div>
  )
}

export default Nothing