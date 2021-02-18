import React from "react";
import rocket from "../../assets/rocket.png";
import "../rocket/rocket.css";
const SPEED = 2;
const ACCELERATION = 1;
export class Rocket extends React.Component {
  x;
  y;
  rotaionPos = 0;
  speed = SPEED;
  prevKey;

  constructor() {
    super();
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.captureKeyPress();
    // Caution : Attaching to global event; // TODO ?
    onmousemove = (e) => this._mouseMoveFollow(e);
  }

  captureKeyPress() {
    document.addEventListener("keydown", (ev) => {
      this.governMovement(ev);
    });
    document.addEventListener("keyup", (ev) => {
      let t = 1;
      this.speed = SPEED + 10;
      const deaccelerator = setInterval(() => {
        t = t + 0.5;
        this.speed = this.speed - ACCELERATION * t;
        this._moveRocket(ev.key);
        if (this.speed === 0 || this.speed < 0) {
          clearInterval(deaccelerator);
        }
      }, 50);
    });
  }

  governMovement(ev) {
    const key = ev.key;
    if (this.prevKey === key) {
      // Add acceleration
      this.speed = this.speed + ACCELERATION;
    } else {
      //reset speed
      this.speed = SPEED;
    }
    this.prevKey = key;
    this._moveRocket(key);
  }

  _mouseMoveFollow(mouseEve) {
    const { clientX, clientY } = mouseEve;
    const diffX = this.x - clientX;
    const diffY = this.y - clientY;

    this.rotaionPos = Math.atan2(diffY, diffX) * (180 / Math.PI) - 180;
  }

  _moveRocket(key) {
    switch (key) {
      case "ArrowUp": {
        this.y = this.y - this.speed;
        break;
      }
      case "ArrowDown": {
        this.y = this.y + this.speed;
        break;
      }
      case "ArrowLeft": {
        this.x = this.x - this.speed;
        break;
      }
      case "ArrowRight": {
        this.x = this.x + this.speed;
        break;
      }
      default: {
        console.log("Dont move the rocket!");
      }
    }
    if (this.x < 0) {
      this.x = document.body.clientWidth;
    }

    if (this.y < 0) {
      this.y = window.innerHeight;
    }

    if (this.x > document.body.clientWidth) {
      this.x = 0;
    }

    if (this.y > window.innerHeight) {
      this.y = 0;
    }
  }

  render() {
    return (
      <div>
        <div
          style={{
            position: "absolute",
            top: this.y,
            left: this.x,
            transform: `rotate(${this.rotaionPos}deg)`,
          }}
        >
          {/* <BulletContainer/> */}
          <img className="rocket-size" src={rocket} alt="rocket" />
        </div>
      </div>
    );
  }
}
