import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const cardsData = [
    {
      id: 1,
      front: 'El ciclón',
      back: 'Tornado',
      image: 'images/tornado.jpg'
    },
    {
      id: 2,
      front: 'La erupción volcánica',
      back: 'Volcanic eruption',
      image: 'images/volcano.jpg'
    },
    {
      id: 3,
      front: 'El huracán',
      back: 'Hurricane',
      image: 'images/hurricane.jpg'
    },
    {
      id: 4,
      front: 'La inundación',
      back: 'Flood',
      image: 'images/flood.jpg'
    },
    {
      id: 5,
      front: 'La sequía',
      back: 'Drought',
      image: 'images/drought.jpg'
    },
    {
      id: 6,
      front: 'El incendio forestal',
      back: 'Forest fire',
      image: 'images/forest-fire.jpg'
    },
    {
      id: 7,
      front: 'El maremoto',
      back: 'Tsunami',
      image: 'images/tsunami.jpg'
    },
    {
      id: 8,
      front: 'La tormenta',
      back: 'Storm',
      image: 'images/storm.jpg'
    },
    {
      id: 9,
      front: 'Los relámpagos',
      back: 'Lightning',
      image: 'images/lightning.jpg'
    },
    { id: 10,
      front: 'La avalancha de nieve',
      back: 'Avalanche',
      image: 'images/avalanche.jpg'
    },
    { id: 11,
      front: 'Los truenos',
      back: 'Thunder',
      image: 'images/thunder.jpg'
    }    
  ];

  const [currentCard, setCurrentCard] = useState(null); 
  const [backstack, setBackstack] = useState([]); // stack of cards that have been randomly pulled on this iteration
  const [isFlipped, setIsFlipped] = useState(false); 

  // get random card
  const getRandomCard = () => {
    const drawnCardIds = backstack.map(card => card.id);
    const remainingCards = cardsData.filter(card => !drawnCardIds.includes(card.id));

    if (remainingCards.length === 0) return null; // no cards left to draw

    return remainingCards[Math.floor(Math.random() * remainingCards.length)];
  };

  // set a card randomly when app loads
  useEffect(() => {
    const firstCard = getRandomCard();
    if (firstCard) {
      setCurrentCard(firstCard);
    }
  }, []);

  // card flip functionality
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  // get next card
  const handleNext = () => {
    if (currentCard) {
      setBackstack([...backstack, currentCard]); // store currentCard on backstack
    }

    const nextCard = getRandomCard();
    if (nextCard) {
      setCurrentCard(nextCard);
      setIsFlipped(false); // reset flip state
    }
  };

  // get previous card
  const handleBack = () => {
    if (backstack.length > 0) {
      const prevCard = backstack[backstack.length - 1];
      setCurrentCard(prevCard);
      setBackstack(backstack.slice(0, -1)); // pop last card from backstack
      setIsFlipped(false); // reset flip state
    }
  };

  // reset flashcards
  const handleReset = () => {
    const firstCard = getRandomCard();
    setCurrentCard(firstCard);
    setBackstack([]);
    setIsFlipped(false);
  };

  // counter
  const cardsDrawn = backstack.length + (currentCard ? 1 : 0);

  return (
    <div className="App">
      
      <div className="header">
        <h1>¡Practiquemos español!</h1>
        <h2>Explora el vocabulario de fenómenos del tiempo y desastres naturales.</h2>
      </div>

      <div className="flashcard-container">
        {currentCard ? (
          <div className="flashcard" onClick={handleFlip}>
            <div className={`flashcard-inner ${isFlipped ? "flipped" : ""}`}>
              <div className="front">
                <h2>{currentCard.front}</h2>
                <img src={currentCard.image} alt={currentCard.front} />
              </div>
              <div className="back">
                <h2>{currentCard.back}</h2>
              </div>
            </div>
          </div>
        ) : (
          <h2>Loading... </h2>
        )}
      </div>

      <div className="counter">
        <h3> {cardsDrawn} out of {cardsData.length} </h3>
        { cardsDrawn === cardsData.length && <p>¡Buen trabajo! You're done!</p>}
      </div>

      <div className="button-container">
        {backstack.length > 0 && <button onClick={handleBack}>Back</button>}
        {backstack.length < cardsData.length - 1 ? (
          <button onClick={handleNext}>Next</button>
        ) : (<button onClick={handleReset}>Reset</button>
        )}
      </div>

    </div>
  );
};

export default App
