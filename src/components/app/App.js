import React from "react";
import { Rocket } from "../../game-objects/rocket/rocket";
import { Star } from "../../game-objects/star/Star";
import { Score } from "../../game-objects/score/score";
import "../app/app.css";

class RocketApp extends React.Component {
  rocket = new Rocket();
  state = {
    framePos: 0,
    score: 0,
    pausePlayText: "Pause",
  };
  isPaused = false;

  componentDidMount() {
    this.gameLoop();
  }

  gameLoop() {
    this.setState({
      framePos: this.state.framePos > 100 ? 0 : this.state.framePos + 0.1,
      score: this.state.score + 0.01,
    });
    window.requestAnimationFrame(() => {
      if (!this.isPaused) {
        this.gameLoop();
      }
    });
  }

  _pausePlay() {
    this.isPaused = !this.isPaused;
    const pausePlayText = this.isPaused ? "Play" : "Pause";
    this.setState({
      ...this.state,
      pausePlayText,
    });
    !this.isPaused && this.gameLoop();
  }

  render() {
    return (
      <div className="full-height">
        <div onClick={() => this._pausePlay()}>{this.state.pausePlayText}</div>
        <Score score={parseInt(this.state.score)} />
        <div className="full-height space-background">
          <Star framePos={this.state.framePos} />
        </div>
        <div>
          <Rocket framePos={this.state.framePos} />
        </div>
      </div>
    );
  }
}

export default RocketApp;
