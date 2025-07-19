import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const limit = 10;

  const increase = () => {
    if (count < limit) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <main style={styles.container}>
      <h1>Click Counter App</h1>
      <h2>Count: {count}</h2>
      {count === limit && <p style={styles.limitMsg}>You've reached the limit!</p>}
      <div style={styles.buttons}>
        <button onClick={increase} style={styles.button}>Increase(+)</button>
        <button onClick={decrease} style={styles.button}>Decrease(+)</button>
      </div>
    </main>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    fontFamily: 'Arial'
  },
  buttons: {
    marginTop: '1rem'
  },
  button: {
    margin: '0 10px',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  limitMsg: {
    color: 'red',
    fontWeight: 'bold'
  }
};

export default App;
