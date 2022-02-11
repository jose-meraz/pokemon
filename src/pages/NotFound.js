import React from 'react'

const NotFound = () => {
  return (
    <div className="sm:w-10/12 w-full m-4 p-4 flex justify-center items-center text-center">
      <div>
        <h1 className="text-8xl font-semibold w-full">404 Not Found</h1>
        <p className="w-full">Oops it's looks like you're trying to search something that's not on our library. Please go home.</p>
      </div>
    </div>
  )
}

export default NotFound