import React from 'react'

import NavBar from './navBar.jsx'
import StickyHeader from './StickyHeader.jsx'

export default function Code() {
    var projects = [{ name: "Bodhi" }, { name: "Artsy Filtery" }, { name: "Superpower Store" }]

    return (
        <div className="projects-page">
        <NavBar />
        <StickyHeader />
        <hr/>
        <div id="projects" className="projects">
        <hr/>

        <div className="project-right">
            <h2>Sports Illustrated</h2>

            <div>
                <img className="project-img" src="../assets/SI.png" />
                <h4>Leveraging a mix of jquery, javascript, express, drupal, css, and Sass, I created and debugged custom-made templates throughout site.  Worked closely with designers and dev-ops team to make sure complex and dynamic content—such as stats, current games, and mixed media articles—were presented correctly in multiple formats.
                </h4>
            </div>
            <a href="https://www.si.com" target="_blank">View Site
            </a>
        </div>
        <hr/>

        <div className="project-left">
            <h2>Bodhi</h2>
            <div>
                <img className="project-img" src="../assets/bodhi.png"/>
                <h4>Built using firebase database, and oauth on the backend and Material UI and React on the frontend, Bodhi is a social network for giving and receiving help.  Use the map functionality to see who in your area needs a quick hand.
                </h4>
            </div>
            <a href="https://github.com/kulkarnipallavis/bodhi" target="_blank">View Code
            </a>
        </div>
        <hr/>

        <div className="project-right">
            <h2>Superpower Store</h2>
            <div>
                <img className="project-img" src="../assets/superpower_store.png"/>
                 <h4>Built using Postgres, Sequelize, and Express for the backend--with React powering the frontend, the Superpower Store exists for all of your superpower needs.
                 </h4>
             </div>
            <a href="https://github.com/JulieBusch/superpower-store" target="_blank">View Code
            </a>
         </div>
         <hr/>


        <div className="project-left">
            <h2>Savta Phone</h2>
             <img className="project-img" src="../assets/savta_phone.png" />
             <div>
                 <h4>Simplified and fully functional iOS phone application built using React Native to create a more accessible experience for users with visual and touch impairments.  This was a project originally created for the grandmother of a friend--Savta being Hebrew for Grandmother.  She had a difficult timing calling loved ones due to the small script on her phone screen and the number of buttons that she had to navigate--so I created a simple app to help her.
                 </h4>
             </div>
             <a href="https://github.com/goldienova/SavtaPhone" target="_blank">View Code
             </a>
         </div>
        <hr/>
        <div className="project-right">
            <h2>Artsy Filtery</h2>
            <img className="project-img" src="../assets/artsy_filtery.png" />
            <div>
         <h4>Custom art filter made using HTML5's canvas element and vanilla javascript to dynamically iterate and re-render images.</h4>
         </div>
         <a href="https://github.com/goldienova/Artsy-Filtery" target="_blank">View Code</a>
         </div>

         </div>
         </div>
    )
}
