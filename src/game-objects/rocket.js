import React from "react";
export class Rocket {
  x;
  y;
  speed; //TODO: will introduce spped later

  constructor() {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.captureKeyPress();
  }

  captureKeyPress() {
    document.addEventListener("keydown", (ev) => {
        const key = ev.key;
        switch(key){
            case 'ArrowUp':{
               this.y = this.y - 5;
               break;
            }
            case 'ArrowDown':{
                this.y = this.y + 5;
                break;
            }
            case 'ArrowLeft':{
                this.x = this.x - 5;
                break;
            }
            case 'ArrowRight':{
                this.x = this.x + 5;
                break;
            }
        
        }
        
        if(this.x < 0){
            this.x = document.body.clientWidth;
        }

        if(this.y < 0){
            this.y = window.innerHeight;
        }

    });
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
