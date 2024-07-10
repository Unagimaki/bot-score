import { useEffect } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState('')
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    setScore(score)
  }, [])
  return (
    <div className="App">
      Score: {score}
    </div>
  );
}

export default App;
