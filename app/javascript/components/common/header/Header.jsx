import React from 'react'
import { Navbar } from '../../common'

function Header() {

  return (
    <div className="flex-column bg-green-500 -mx-10">
      <div className="flex justify-between content-center mb-2">
        <div className="text-5xl">
          <a href="/" className="">Portfolio</a>
        </div>
        <div className="content-self">
          <Navbar />
        </div>
      </div>
      <div className="flex justify-end gap-6">
        <div className="header-bottom-phone">
          +1 (224) 829-8505
        </div>
        <div className="header-bottom-email">
          danezdalton1@gmail.com
        </div>
      </div>
    </div>
  )
}

export default Header