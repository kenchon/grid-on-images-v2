import React from 'react';
import CanvasBoard from 'components/Canvas'
import Header from 'components/Header'
import Manipulator from 'components/Manipulator'

// Grid-on-Images のベースコンポーネント
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Manipulator />
      <CanvasBoard />
    </div>
  );
}

export default App;
