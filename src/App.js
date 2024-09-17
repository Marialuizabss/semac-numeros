import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const animateNumbers = () => {
      const elements = document.querySelectorAll('.animate-number');
      elements.forEach((element) => {
        const start = parseInt(element.getAttribute('data-start'), 10);
        const end = parseInt(element.getAttribute('data-end'), 10);
        const duration = parseInt(element.getAttribute('data-duration'), 10);
        let current = start;
        const increment = (end - start) / (duration * 30);

        const updateNumber = () => {
          current += increment;
          if (current >= end) {
            current = end;
            element.textContent = `+${Math.floor(current)}`;
          } else {
            element.textContent = `+${Math.floor(current)}`;
            requestAnimationFrame(updateNumber);
          }
        };
        updateNumber();
      });
    };

    animateNumbers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Onde a Automação e a</h1>
        <h1>Computação se <span className="highlight">encontram</span>.</h1>
        <hr className="divider" />
        <div className="stats-container">
          <div className="stat-item">
            <h2 className="animate-number" data-start="0" data-end="8" data-duration="2">+0</h2>
            <p>Palestrantes</p>
          </div>
          <div className="stat-item">
            <h2 className="animate-number" data-start="0" data-end="10" data-duration="2">+0</h2>
            <p>Minicursos</p>
          </div>
          <div className="stat-item">
            <h2 className="animate-number" data-start="0" data-end="12" data-duration="2">+0</h2>
            <p>Parceiros</p>
          </div>
          <div className="stat-item">
            <h2 className="animate-number" data-start="0" data-end="30" data-duration="2">+0</h2>
            <p>Painéis</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
