import React from 'react';
import ComponentType from 'react';
import logo from './logo.svg';
import CanvasWrapper from 'components/Canvas'
import HeaderContainer from 'components/Header'

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderContainer/>
      <CanvasWrapper />
    </div>
  );
}

export default App;
