import React from 'react';
import { Rocket } from "../../game-objects/rocket/rocket";
import { Star } from "../../game-objects/star/Star";
import "../app/app.css";

class RocketApp extends React.Component {
    rocket = new Rocket();
    state = {
        rocketStruct: '', 
        framePos : 0,
    }

    componentDidMount(){
        this.gameLoop();
    }

    gameLoop(){
        this.setState({
            rocketStruct : this.rocket.getMyStructure(),
            framePos : this.state.framePos > 100 ? 0 : (this.state.framePos + 0.1)
        })
        window.requestAnimationFrame(()=>{
            this.gameLoop();
        })  
    }   
    
    render(){

        return (
            <div className="full-height">
                <div className="full-height space-background">
                    <Star framePos={this.state.framePos} />
                </div>
               <div>
               {this.state.rocketStruct}
               </div>
             </div>
        )
    }
}

export default RocketApp;