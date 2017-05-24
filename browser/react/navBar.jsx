import React from 'react'
import { Link } from 'react-router'

export default function NavBar(){
  return(
         <div>
    <ul className="navBar">
       <li><Link to="/code">Code</Link></li>
       <li><a href="../art/index.html">Art</a></li>
        <li><Link to="/about">About</Link></li>
    </ul>
    </div>
    )
}
