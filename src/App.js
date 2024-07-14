import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [arr, setArr] = useState([])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    alert(urlParams);
    const score = urlParams.get('score');
    alert(score)
    score && setArr(score.split(',').map(Number));
  }, []);
  
  useEffect(() => {
    alert(arr)
  }, [arr])

  const getProgressBarWidth = (score) => {
    switch (score) {
      case '4':
        return '80%';
      case '5':
        return '100%';
      case '3':
        return '50%';
      default:
        return '100%';
    }
  }

  return (
    <div className="App">
      <div className='score_item'>Grammar: {arr[0]} 
        <div className="progress-bar" 
          style={{ 
            '--progress-width': `${arr[0]}%`, 
            '--progress-color': 'green'
          }}></div>
      </div>
      <div className='score_item'>Vocabulary: {arr[1]} 
        <div className="progress-bar" 
          style={{ 
            '--progress-width': `${arr[1]}%`, 
            '--progress-color': 'green' 
          }}></div>
      </div>
      <div className='score_item'>Connectivity: {arr[2]} 
        <div className="progress-bar" 
          style={{ 
            '--progress-width': `${arr[2]}%`, 
            '--progress-color': 'green' 
          }}></div>
      </div>
    </div>
  );

}

export default App;