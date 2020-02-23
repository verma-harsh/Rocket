import React from 'react';
import { Rocket } from "../../game-objects/rocket";

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
            <div>
                {this.state.rocketStruct}
             </div>
        )
    }
}

export default RocketApp;