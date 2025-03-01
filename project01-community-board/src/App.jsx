import './App.css';
import Calendar from './components/Calendar'

const App = () => {

  return (
    <div className="App">
      <div className="titlebar">
        <h1>Board Game Club Schedule</h1>
        <h2>Hello there! Here's all the gaming events we have planned for the month!</h2>
      </div>

      <Calendar />
      
    </div>
  )
}

export default App;
