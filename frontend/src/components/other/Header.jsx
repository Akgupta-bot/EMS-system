import React from 'react'

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-white text-2xl font-medium">Hello <br/> <span className="text-3xl font-semibold">Anurag👋</span></h1>
      <button className="text-white bg-red-700 rounded px-5 py-2 hover:scale-105 active:scale-95 font-medium active:bg-red-800 cursor-pointer">Log out</button>
    </div>
  )
}

export default Header
