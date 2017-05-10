import React from 'react'

export default function App(){
   var paperPlanes = 'xlink:href="paper.planes.jpg'
   var wobblyLayers = []
   let fill
   let curves = "c 10 30, 50 100, 80 -45 c 10 30, 30 40, 45 -16 c 10 70, 40 70, 45 -19 c 10 50, 25 50, 45 -40"

   for(var i=12; i>0; i--){
      if(i%3===0) fill = '#f5b595'
      else if(i%2===0) fill = '#CCFFF4'
      else fill= 'url(#img1)'
      wobblyLayers.push( <div className={`parallax__layer parallax__layer--back--${i}`}>
         <svg width="3000" height="1000" xmlns="http://www.w3.org/2000/svg">
         {fill === 'url(#img1)' ?
         <defs>
         <pattern id="img1" patternUnits="userSpaceOnUse" width="500" height="500">
         <image xlinkHref='paper.planes.jpg' height="500" width="500"/>
         </pattern>
         </defs> : null}
         <path  d={`M -10 ${25 + 40*i}
         l 0 450
         ${curves.repeat(6)}
         l 0 -200
         l -2000 0`}
         stroke='#c48fff' fill={fill}/>
         </svg>
         </div>)
   }
  return(
         <div className="parallax">
         <div style={{position: "fixed"}}>
        <svg width = "100%" height = "100%" className="flower">
          <path fill="transparent" stroke="#000" stroke-width="1.5"
           d="M 400 0
           l 0 350
           l -25 45
           l -35 -10
           l 10 35
           l -85 0
           l 85 35
           l -10 35
           l 35 -10
           l 25 85
           l 25 -85
           l 35 10
           l -10 -35
           l 85 -35
           l -85 0
           l 10 -35
           l -35 10
           L 400 350
           "

           fill="pink"
          />
        </svg>
      <svg width = "100%" height = "100%" className="flower">
          <path fill="transparent" stroke="#000" stroke-width="1.5"
           d="M 850 0
           l 0 200
           l -25 45
           l -35 -10
           l 10 35
           l -85 0
           l 85 35
           l -10 35
           l 35 -10
           l 25 85
           l 25 -85
           l 35 10
           l -10 -35
           l 85 -35
           l -85 0
           l 10 -35
           l -35 10
           L 850 200
           "

           fill="pink"
          />
        </svg>
        </div>

{}
<div style={{height: "1000px"}}>
</div>

         </div>)
}
