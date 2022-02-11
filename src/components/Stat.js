import React from 'react'

function Stat(props) {

  const ratio = () => {
    const ratio = ((props.stat.base_stat * 100 / 255)).toFixed(2).toString()
    return `${ratio}%`
  }

  return (
    <div className="px-2">
      <p className="capitalize">{props.stat.stat.name.replace('-', ' ')}</p>
      <div className="shadow w-full bg-gray-200 rounded-r-full">
        <div className="bg-red-300 dark:bg-blue-300 dark:hover:bg-blue-500 hover:bg-red-500 rounded-r-full text-xs leading-none p-1 text-left text-black" style={{ width: ratio() }}><p className="font-semibold">{props.stat.base_stat}</p></div>
      </div>
    </div>
  )
}

export default Stat