import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');

  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
