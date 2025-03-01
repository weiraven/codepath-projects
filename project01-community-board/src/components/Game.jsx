import React from "react";

const Game = (props) => {

    return (
        <div className={`Game ${props.color}`}>
            {props.image && <img src={`/images/${props.image}`} alt={props.game} className="game-image" />}
            <h5>{props.game}</h5>
            <h6>{props.location}</h6>
        </div>
    );
};

export default Game;