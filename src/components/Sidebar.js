import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { searchPoke } from '../actions/pokeAction'
import { startLogout } from '../actions/auth';


const Sidebar = () => {
  const [dark, setDark] = useState(false)
  const dispatch = useDispatch()
  const search = useSelector(state => state.pokemon.search)

  const toggleDark = () => {
    if (dark) {
      setDark(false)
      localStorage.setItem('theme', 'light')
      document.querySelector('html').classList.remove('dark')
    } else {
      setDark(true)
      localStorage.setItem('theme', 'dark')
      document.querySelector('html').classList.add('dark')
    }
  }

  const searchFunc = (e) => {
    dispatch(searchPoke(e.target.value))
  }

  const hanleLogout = () => {
    dispatch(startLogout())
  }

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDark(true)
      document.querySelector('html').classList.add('dark')
    }
  }, [dark])

  return (
    <div className="sm:w-2/12 w-full sm:order-last order-first sm:pt-2">
      <div className="sticky w-full top-0 flex flex-wrap p-2 justify-center">
        <Link to="/" className="border-b link mb-2">HOME</Link>
        <div className="container mx-auto flex justify-center">
          <div className="p-2 border rounded-full flex max-w-xl cursor-pointer">
            <button className={`material-icons ${dark ? "mr-10" : "ml-10"} text-black dark:text-white`} onClick={toggleDark}>
              {
                dark
                  ?
                  "dark_mode"
                  :
                  "brightness_high"
              }
            </button>
          </div>
        </div>
        <div className="my-3 w-full">
          <input type="text" name="search" id="search" placeholder="Search Pokémon Name" className="w-full border rounded-xl text-sm h-10 p-2 text-black" value={search} onChange={searchFunc} />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={hanleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar