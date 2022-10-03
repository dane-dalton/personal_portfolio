import React from 'react'
import { Navlink } from '../../common'

function Navbar() {

  return (
    <ul className="flex gap-4">
      <li><a href="/about">About</a></li>
      <li><a href="https://www.linkedin.com/in/dane-dalton-8406b6180/" target="_blank">LinkedIn</a></li>
      <li><a href="https://github.com/dane-dalton" target="_blank">GitHub</a></li>
      <li><a href="/projects">Projects</a></li>
    </ul>
  )
}

export default Navbar