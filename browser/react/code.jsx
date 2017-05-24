import React from 'react'

import NavBar from './navBar.jsx'

export default function Code(){
  var projects = [{name: "Bodhi"}, {name: "Artsy Filtery"}, {name: "Superpower Store"}]

  return (
    <div className="projects-page">
        <NavBar />
        <h1> Projects </h1>
        <hr/>
        <div className="projects">
        <hr/>
         <div className="project-left">
         <img className="project-img" src="../assets/bodhi.png"/>
         <h2>Bodhi</h2>
         <h4>Built using firebase database, and oauth on the backend and Material UI and React on the frontend, Bodhi is a social network for giving and receiving help.  Use the map functionality to see who in your area needs a quick hand.</h4>
         <a href="https://github.com/kulkarnipallavis/bodhi" target="_blank">View Code
         </a>
         <a href="https://bodhi.community/home" target="_blank">https://bodhi.community</a>
         </div>
                  <hr/>
                 <div className="project-right">
    <img className="project-img" src="../assets/superpower_store.png" style={{"max-width": "25%"}}/>
    <div>
        <h2>Superpower Store</h2>
         <h4>Built using Postgres, Sequelize, and Express for the backend--with React powering the frontend, the Superpower Store exists for all of your superpower needs.</h4>
                  <a href="https://github.com/JulieBusch/superpower-store" target="_blank">View Code
         </a>
         <a href="https://sheltered-taiga-91490.herokuapp.com/" target="_blank">https://sheltered-taiga-91490.herokuapp.com/</a>
         </div>
         </div>
         <hr/>
        <div className="project-left">
         <img className="project-img" src="../assets/savta_phone.png" style={{"margin-bottom": "2%", "margin-left": "2%"}}/>
         <h2>Savta Phone</h2>
         <h4>Simplified and fully functional iOS phone application built using React Native to create a more accessible experience for users with visual and touch impairments. </h4>
                  <a href="https://github.com/goldienova/SavtaPhone" target="_blank">View Code
         </a>

         </div>

         </div>
        <hr/>
        <div className="project-right">
            <img className="project-img" src="../assets/artsy_filtery.png" style={{"max-width": "25%"}}/>
            <div>
         <img className="project-img" />
         <h2>Artsy Filtery</h2>
         <h4>Custom art filter made using HTML5's canvas element and vanilla javascript to dynamically iterate and re-render images.</h4>
         <a href="https://github.com/goldienova/Artsy-Filtery" target="_blank">View Code</a>
         </div>
         </div>

         </div>
         )
}
