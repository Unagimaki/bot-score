import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState('')
  const [arr, setArr] = useState([])
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    setScore(score)
    setArr(score.split(''))
  }, [])

  return (
    <div className="App">
      Grammar: {arr[0]}
      Vocabulary: {arr[1]}
      Connectivity: {arr[2]}
    </div>
  );
}

export default App;
