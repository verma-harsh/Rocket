import React from "react";
export class Rocket {
  x;
  y;
  speed = 5; 

  constructor() {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.captureKeyPress();
  }

  captureKeyPress() {
    document.addEventListener("keydown", (ev) => {
        this.governMovement(ev);
    });
  }

  governMovement(ev){
    const key = ev.key;
    switch(key){
        case 'ArrowUp':{
           this.y = this.y - this.speed;
           break;
        }
        case 'ArrowDown':{
            this.y = this.y + this.speed;
            break;
        }
        case 'ArrowLeft':{
            this.x = this.x - this.speed;
            break;
        }
        case 'ArrowRight':{
            this.x = this.x + this.speed;
            break;
        }
    
    }
    
    if(this.x < 0){
        this.x = document.body.clientWidth;
    }

    if(this.y < 0){
        this.y = window.innerHeight;
    }

    if(this.x > document.body.clientWidth){
        this.x = 0;
    }

    if(this.y > window.innerHeight){
        this.y = 0;
    }
  }

  getMyStructure() {
    return (
      <div
        style={{
          position: "absolute",
          top: this.y,
          left: this.x
        }}
      >
        Rocket
      </div>
    );
  }
}
