import React from 'react';
export class Rocket {
    x;
    y;
    speed; //TODO: will introduce spped later


    constructor(){
        this.x = window.innerWidth/2;
        this.y = window.innerHeight/2;
        this.captureKeyPress();
    }

    captureKeyPress(){
        
    }

    getMyStructure(){
        return (
            <div style={{
                position:'absolute',
                top: this.y,
                left: this.x
            }}>
                Rocket
            </div>
        )
    }
}