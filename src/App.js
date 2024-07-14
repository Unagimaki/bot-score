import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [arr, setArr] = useState([])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    score && setArr(score.split(',').map(Number));
  }, []);
  
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