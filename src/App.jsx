import './App.css'
import { startTimer } from 'shared-worker-timer';

startTimer();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shared Worker Timer</h1>
      </header>
    </div>
  );
}

export default App
