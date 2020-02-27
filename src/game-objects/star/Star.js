import React from "react";
import "../star/star.css";
const STAR_NUM = 100;

function _getStars() {
  const stars = [];
  
  for (let index = 0; index < STAR_NUM; index++) {
    const x = Math.floor(Math.random() * 100) + 1;
    const y = Math.floor(Math.random() * 100) + 1;
    const typeNum =  Math.random() * 10;
    const starType = typeNum > 5 ?(typeNum < 9 && typeNum > 5? 2 : 3) : 1;
    const twinkleNum =  Math.random() * 10;
    const twinkleType = twinkleNum > 5 ?(twinkleNum < 9 && twinkleNum > 5? 2 : 3) : 1;
    stars.push(
      {
        x,y,starType,twinkleType
      }
    );
  }
  return stars;
}

let STARS = _getStars();


export class Star extends React.Component {

  starJsx(starObj,index){
    starObj.x = starObj.x - 0.1;
     if(starObj.x < 0){
      starObj.x = 100;
      starObj.y = Math.floor(Math.random() * 100) + 1;
     } 
    return <div 
    key={index}
      style={{
        position: "absolute",
        top: starObj.y + '%',
        left:starObj.x + '%',
        WebkitAnimation: `twinkle_${starObj.twinkleType} ${3 * starObj.twinkleType}s ease-in-out infinite`,
        MozAnimation: `twinkle_${starObj.twinkleType} ${3 * starObj.twinkleType}s ease-in-out infinite`,
        OAnimation    :`twinkle_${starObj.twinkleType} ${3 * starObj.twinkleType}s ease-in-out infinite`,
          animation:`twinkle_${starObj.twinkleType} ${3 * starObj.twinkleType}s ease-in-out infinite`,
      }}
      className={`star-type${starObj.starType}`}
    ></div>
  }

  render() {
    return STARS.map((i,ind)=> this.starJsx(i,ind));
  }
}
