import React from 'react';
import { Rocket } from "../../game-objects/rocket";

class RocketApp extends React.Component {
    rocket = new Rocket();
    
    render(){

        return (
            <div>
                {this.rocket.getMyStructure()}
             </div>
        )
    }
}

export default RocketApp;