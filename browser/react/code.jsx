import React from 'react'
import {Link} from 'react-router'

export default function Code(){
  var projects = [{name: "Bodhi"}, {name: "Artsy Filtery"}, {name: "Superpower Store"}]

  return (
        <div className="projects-page">
        <ul className="navBar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/art">Art</Link></li>
        <li><Link to="/code">Code</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
        <h1> Projects </h1>
        <hr/>
         <div className="project">
         <img className="project-img" src="../bodhi.png"/>
         <h2>Bodhi</h2>
         <h4>Built using firebase database, and oauth on the backend and Material UI and React on the frontend, Bodhi is a social network for giving and receiving help.  Use the map functionality to see who in your area needs a quick hand.</h4>
         </div>
         <hr/>
        <div className="project">
         <img className="project-img" />
         <h2>Artsy Filtery</h2>
         <h4>Built using firebase database, and oauth on the backend and Material UI and React on the frontend, Bodhi is a social network for fostering community support.  Use the map functionality to see who in your area needs a quick hand.</h4>
         </div>
         <hr/>
                 <div className="project">
         <img className="project-img" />
         <h2>Artsy Filtery</h2>
         <h4>Built using firebase database, and oauth on the backend and Material UI and React on the frontend, Bodhi is a social network for giving and receiving help.  Use the map functionality to see who in your area needs a quick hand.</h4>
         </div>
         </div>
         )
}
