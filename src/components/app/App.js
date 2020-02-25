import React from 'react';
import { Rocket } from "../../game-objects/rocket/rocket";
import { Star } from "../../game-objects/star/Star";
import "../app/app.css";

class RocketApp extends React.Component {
    rocket = new Rocket();
    state = {
        rocketStruct: '', 
    }

    componentDidMount(){
        this.gameLoop();
    }

    gameLoop(){
        this.setState({
            rocketStruct : this.rocket.getMyStructure(),
        })
        window.requestAnimationFrame(()=>{
            this.gameLoop();
        })  
    }   
    
    render(){

        return (
            <div className="full-height">
                <div className="full-height space-background">
                    <Star/>
                </div>
               <div>
               {this.state.rocketStruct}
               </div>
             </div>
        )
    }
}

export default RocketApp;