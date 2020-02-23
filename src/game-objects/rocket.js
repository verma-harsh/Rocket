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
    document.addEventListener("keypress", () => {
      this.x = 2;
      this.y = 2;
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
