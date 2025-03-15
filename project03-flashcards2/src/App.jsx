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

  const [cardOrder, setCardOrder] = useState(cardsData.map(card => card.id)); // standard order of cards by id, ascending
  const [shuffled, setShuffled] = useState(false);
  const [currentCard, setCurrentCard] = useState(null); 
  const [backstack, setBackstack] = useState([]); // stack of cards that have been randomly pulled on this iteration
  const [isFlipped, setIsFlipped] = useState(false); 
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  // set a card randomly when app loads
  useEffect(() => {
    const firstCard = cardsData[0];
    setCurrentCard(firstCard);
    setCardOrder(cardsData.map(card => card.id));
  }, []);

  // card flip functionality
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  // get next card
  const handleNext = () => {
    const currentIndex = cardOrder.indexOf(currentCard.id);
    const nextIndex = (currentIndex + 1) % cardOrder.length;
    const nextCardId = cardOrder[nextIndex];
    const nextCard = cardsData.find(card => card.id === nextCardId);
    setBackstack([...backstack, currentCard]);
    setCurrentCard(nextCard);
    setIsFlipped(false); // reset flip state
    setGuess(''); // clear guess input
    setFeedback(''); // clear feedback
  };

  // get previous card
  const handleBack = () => {
    if (backstack.length > 0) {
      const prevCard = backstack[backstack.length - 1];
      setCurrentCard(prevCard);
      setBackstack(backstack.slice(0, -1)); // pop last card from backstack
      setIsFlipped(false); // reset flip state
      setGuess(''); // clear guess input
      setFeedback(''); // clear feedback
    }
  };

  // shuffle cards
  const handleShuffle = () => {
    setShuffled(!shuffled);
    if (!shuffled) {
      const shuffledOrder = [...cardOrder].sort(() => Math.random() - 0.5);
      setCardOrder(shuffledOrder);
      setBackstack([]);
      setCurrentCard(cardsData.find(card => card.id === shuffledOrder[0]));
      setCurrentStreak(0);
      setIsFlipped(false);
      setGuess('');
      setFeedback('');
    } else {
      setCardOrder(cardsData.map(card => card.id));
      setBackstack([]);
      setCurrentCard(cardsData[0]);
      setCurrentStreak(0);
      setIsFlipped(false);
      setGuess('');
      setFeedback('');
    }
  };

  // reset flashcards
  const handleReset = () => {
    setBackstack([]);
    if (shuffled) {
      const shuffledOrder = [...cardOrder].sort(() => Math.random() - 0.5);
      setCardOrder(shuffledOrder);
      setCurrentCard(cardsData.find(card => card.id === shuffledOrder[0]));
    } else {
      setCardOrder(cardsData.map(card => card.id));
      setCurrentCard(cardsData[0]);
    }
    setIsFlipped(false);
    setGuess('');
    setFeedback('');
    setCurrentStreak(0);
  };

  // handle user guess input
  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmitGuess = (event) => {
    if (guess.trim().toLowerCase() === currentCard.back.toLowerCase()) {
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > bestStreak) {
        setBestStreak(newStreak);
      }
      if (newStreak === 2) {
        setFeedback(`¡Correcto! You're 2 for 2!`);
      } else if (newStreak > 2) {
        setFeedback(`¡Correcto! You're on a streak of ${newStreak}!`);
      } else {
        setFeedback('¡Correcto!');
      }
      setIsFlipped(true);
      // Check if this is the last card
      if (backstack.length + 1 === cardsData.length) {
        if (bestStreak > 1) {
          setFeedback(`¡Buen trabajo! Your best streak was ${bestStreak}!`);
        } else {
          setFeedback('¡Buen trabajo! You\'ve seen all the cards!');
        }
      }
    } else {
      setFeedback('Incorrecto, intenta de nuevo.');
      setCurrentStreak(0);
    }
  };

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
        <h3> {backstack.length + 1} out of {cardsData.length} </h3>
      </div>

      <div className="guess-container">
        <input type="text" value={guess} className="guess-input"
        onChange={handleGuessChange} 
        onKeyPress={(e) => e.key === 'Enter' && handleSubmitGuess(e)}
        placeholder="Tu respuesta aquí"/>
        <button onClick={handleSubmitGuess}>Submit</button>
      </div>

      <div className="feedback-container">
        <h3>{feedback}</h3>
      </div>

      <div className="button-container">
        <button className={`navbutton ${shuffled ? 'unshuffle' : ''}`} onClick={handleShuffle}>
        {shuffled ? 'Unshuffle' : 'Shuffle'}
        </button>
        {backstack.length > 0 && <button className="navbutton" onClick={handleBack}>Back</button>}
        {backstack.length < cardsData.length - 1 && (
          <button className="navbutton" onClick={handleNext}>Next</button>
        )}
        {backstack.length > 0 && <button className="navbutton" onClick={handleReset}>Reset</button>}
      </div>

    </div>
  );
};

export default App
