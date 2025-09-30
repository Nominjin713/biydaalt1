'use client';

import { useState } from 'react';

export default function CounterPage() {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) setCount(count - 1); // 0-оос доош буухгүй
  };

  const double = () => setCount(count * 2);

  const halve = () => {
    if (count > 1) {
      setCount(Math.floor(count / 2));
    }
  };

  const reset = () => setCount(0); // 0-оос эхлэхээр өөрчилсөн

  const styles = {
    container: {
      textAlign: 'center' as const,
      marginTop: '60px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    title: {
      fontSize: '40px',
      color: '#333',
      marginBottom: '20px',
    },
    count: {
      fontSize: '50px',
      fontWeight: 'bold' as const,
      color: '#444',
      marginBottom: '30px',
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      flexWrap: 'wrap' as const,
    },
    button: {
      fontSize: '20px',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '8px',
      color: 'white',
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
    },
    btnRed: {
      backgroundColor: '#f44336',
    },
    btnGreen: {
      backgroundColor: '#4caf50',
    },
    btnBlue: {
      backgroundColor: '#2196f3',
    },
    btnYellow: {
      backgroundColor: '#ff9800',
    },
    btnGray: {
      backgroundColor: '#757575',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Тоолуур</h1>
      <h2 style={styles.count}>{count}</h2>
      <div style={styles.buttonGroup}>
        <button
          style={{ ...styles.button, ...styles.btnRed }}
          onClick={decrement}
          aria-label="Subtract"
        >
          -
        </button>
        <button
          style={{ ...styles.button, ...styles.btnGreen }}
          onClick={increment}
          aria-label="Add"
        >
          +
        </button>
        <button
          style={{ ...styles.button, ...styles.btnBlue }}
          onClick={double}
          aria-label="Double"
        >
          ×2
        </button>
        <button
          style={{ ...styles.button, ...styles.btnYellow }}
          onClick={halve}
          aria-label="Halve"
        >
          ÷2
        </button>
        <button
          style={{ ...styles.button, ...styles.btnGray }}
          onClick={reset}
          aria-label="Reset"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
