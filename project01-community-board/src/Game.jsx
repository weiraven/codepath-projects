import React, { useState } from 'react';

const Game = (props) => {
    const [gameImage, setGameImage] = useState(props.gameImage);
    const [gameName, setGameName] = useState(props.gameName);
    const [numPlayers, setNumPlayers] = useState(props.numPlayers);

    const handleViewDetails = () => {
        // Implement the logic to view details
        console.log(`Viewing details for ${gameName}`);
    };

    return (
        <div>
            <img src={gameImage} alt={`${gameName} image`} />
            <h2>{gameName}</h2>
            <p>Number of Players: {numPlayers}</p>
            <button onClick={handleViewDetails}>View Details</button>
        </div>
    );
};

export default Game;