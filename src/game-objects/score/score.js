import React from "react";
import '../score/score.css';

export class Score extends React.Component{
    render(){
        return (
            <div className="score-box-container">
                    <div className="score-box">
                       Score : {parseInt(this.props.score)}
                    </div>
            </div>
        );
    }
}