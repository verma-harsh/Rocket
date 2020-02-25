import React from "react";
import "../star/star.css";
const STAR_NUM = 100;

function _getStars() {
  const stars = [];
  
  for (let index = 0; index < STAR_NUM; index++) {
    const x = Math.floor(Math.random() * 100) + 1 + '%';
    const y = Math.floor(Math.random() * 100) + 1  + '%';
    const typeNum =  Math.random() * 10;
    const starType = typeNum > 5 ?(typeNum < 9 && typeNum > 5? 2 : 3) : 1;
    const twinkleNum =  Math.random() * 10;
    const twinkleType = twinkleNum > 5 ?(twinkleNum < 9 && twinkleNum > 5? 2 : 3) : 1;
    stars.push(
      <div 
      key={index}
        style={{
          position: "absolute",
          top: x,
          left: y,
          WebkitAnimation: `twinkle_${twinkleType} ${3 * twinkleType}s ease-in-out infinite`,
          MozAnimation: `twinkle_${twinkleType} ${3 * twinkleType}s ease-in-out infinite`,
          OAnimation    :`twinkle_${twinkleType} ${3 * twinkleType}s ease-in-out infinite`,
            animation:`twinkle_${twinkleType} ${3 * twinkleType}s ease-in-out infinite`,
        }}
        className={`star-type${starType}`}
      ></div>
    );
  }
  console.log(stars);
  return stars;
}

let STARS = _getStars();

setInterval(()=>{
    STARS = _getStars();
},10000)

export class Star extends React.Component {
  render() {
    return STARS;
  }
}
