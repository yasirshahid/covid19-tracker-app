import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import InfoPanel from './components/InfoPanel';
import FootNav from './components/FootNav';

function App() {
  return (
    <div>
      <NavBar/>
      <FootNav/>
      <InfoPanel/>
    </div>
  );
}

export default App;
