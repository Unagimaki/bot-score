import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [arr, setArr] = useState([])
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    alert(score);
    score && setArr(score.split(''))
  }, [])
  
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
  const getProgressBarColor = (score) => {
    switch (score) {
      case '2':
        return 'red'
      case '4':
        return 'green';
      case '5':
        return '#08ff1c';
      case '3':
        return 'orange';
      default:
        return '100%';
    }
  }

  return (
    <div className="App">
      <div className='score_item'>Grammar: {arr[0]} 
        <div className="progress-bar" 
          style={{ 
            '--progress-width': getProgressBarWidth(arr[0]), 
            '--progress-color': getProgressBarColor(arr[0]) 
          }}></div>
      </div>
      <div className='score_item'>Vocabulary: {arr[1]} 
        <div className="progress-bar" 
          style={{ 
            '--progress-width': getProgressBarWidth(arr[1]), 
            '--progress-color': getProgressBarColor(arr[1]) 
          }}></div>
      </div>
      <div className='score_item'>Connectivity: {arr[2]} 
        <div className="progress-bar" 
          style={{ 
            '--progress-width': getProgressBarWidth(arr[2]), 
            '--progress-color': getProgressBarColor(arr[2]) 
          }}></div>
      </div>
    </div>
  );

}

export default App;